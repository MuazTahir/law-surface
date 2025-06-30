import { getDataType } from '@/app/lib/utils';
import { Client, getFieldName } from '@/models/client';

import { getCaseFieldName } from '@/models/case';

import { Case } from '@/models/case';
import CaseValue from '@/models/SystemValue';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';
import { Opponent } from '@/models/opponentmodel';
import { ClientFees } from '@/models/clientFees';
import { ClientPayment } from '@/models/clientPayment';
import { ClientInvoice } from '@/models/clientInvoice';
const mongoose = require('mongoose');
import ClientQueries from '../case/../clients/queries';
const { ObjectId } = mongoose.Types;
import ExcelJS from 'exceljs';
import { Session, getSessionFieldName } from '@/models/session';
import { CaseNotes } from '@/models/notes';
import { Procedure } from '@/models/procedure';

import caseQueries from '@/app/api/dashboard/case/queries';
import { update } from 'lodash';
import { CaseUpdate } from '@/models/updates';
import { WorkTime } from '@/models/workingTimer';
import { isAuthenticated } from '@/app/lib/session-contol';

// caseType,
// departments,
// cityArea,
// caseStage,
// court,
// fileNo
let addFormValues = [
  'Case Type',
  'Case Stage',
  'Court Departments',
  'Governorate',
  // "Case Stage",
  'Court'
  // "File No",
  // "City Area"
];

export async function POST(req) {
  let dataType = await getDataType(req);
  const { data } = dataType;

  let auth = await isAuthenticated(req, dataType);

  try {
    console.log(dataType);

    if (!auth) {
      console.log('auth not found for ' + dataType.type);
      return NextResponse.json({ message: 'Not Authorized' }, { status: 403 });
    }

    switch (true) {
      case dataType.type == 'geFileCaseNo': {
        async function generateUniqueCaseFileNo() {
          let count = await Case.countDocuments({ owner: auth.company, fileNo: dataType.data.fileType });
          let proposedNo = count + 1;

          while (await Case.exists({ caseFileNo: proposedNo })) {
            proposedNo++;
          }

          return proposedNo + 1000;
        }

        const caseFileNo = await generateUniqueCaseFileNo();

        return NextResponse.json({
          code: caseFileNo,
          success: true
        });
      }

      case dataType.type == 'getCasesSummary': {
        const caseValues = await CaseValue.findOne({ groupTitle: 'fileCategory' });

        const allFileTypes = caseValues.values.map((val) => ({
          fileNo: val._id,
          nameEn: val.nameEn,
          nameAr: val.nameAr
        }));

        // Step 2: Aggregate counts from "cases"
        const caseCounts = await Case.aggregate([
          {
            $match: {
              owner: auth.company.toString()
            }
          },
          {
            $group: {
              _id: '$fileNo',
              count: { $sum: 1 }
            }
          }
        ]);

        // Step 3: Merge counts with all file types
        const result = allFileTypes.map((type) => {
          const match = caseCounts.find((c) => {
            return c._id === type.fileNo.toString();
          });
          return {
            fileNo: type.fileNo,
            nameEn: type.nameEn,
            nameAr: type.nameAr,
            count: match ? match.count : 0
          };
        });

        return NextResponse.json({
          success: true,
          result
        });
      }

      case dataType.type == 'getWorkTimer': {
        const workTime = await WorkTime.aggregate([
          {
            $match: {
              selectedCase: new mongoose.Types.ObjectId(dataType.data.caseID)
            }
          },
          {
            $lookup: {
              from: 'users', // The collection to join
              localField: 'createdBy', // The field in WorkTime collection
              foreignField: '_id', // The field in Users collection
              as: 'createdByUser' // The new field to store user data
            }
          },
          {
            $unwind: {
              path: '$createdByUser',
              preserveNullAndEmptyArrays: true // Keeps documents even if no match is found
            }
          },
          {
            $project: {
              createdBy: 0 // Optionally remove the original `createdBy` field
            }
          }
        ]);

        // await workTime.save();
        return NextResponse.json({
          success: true,
          workTime
        });
      }

      case dataType.type == 'toggleWorktimeVisibility': {
        await WorkTime.findByIdAndUpdate(data._id, {
          $set: {
            hideFromReport: data.value
          }
        });
        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'addWorkTimer': {
        if (data.hour || data.minute) {
          data.manualTime = (data.hour || '00') + ':' + (data.minute || '00');
        }
        const workTime = new WorkTime(data);
        workTime.createdAt = Date.now();

        await workTime.save();
        return NextResponse.json({
          success: true,
          workTime
        });
      }

      case dataType.type == 'getCaseByFile': {
        let cases = await caseQueries.getCases(
          dataType,
          {},
          {
            // TBC company from token
            // owner: data.company,
            genFileNo: data.genFileNo
          },
          0,
          0,
          false
        );

        return NextResponse.json({
          success: true,
          cases: cases[0].results
        });
      }

      case dataType.type == 'getUpdates': {
        const notes = await CaseUpdate.aggregate([
          {
            $match: {
              case: new mongoose.Types.ObjectId(data.caseID)
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'createdBy', // user is already an ObjectId
              foreignField: '_id',
              as: 'userDetails'
            }
          },
          {
            $unwind: {
              path: '$userDetails',
              preserveNullAndEmptyArrays: true // This will include documents even if no user is found
            }
          }
        ]);

        return NextResponse.json({
          success: true,
          notes
        });
      }

      case dataType.type == 'deleteUpdate': {
        await CaseUpdate.findByIdAndDelete(data.noteId);
        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'addUpdate': {
        const update = new CaseUpdate(data);
        update.createdAt = Date.now();
        await update.save();
        return NextResponse.json({
          success: true,
          update
        });
      }

      case dataType.type == 'getRelatedCases': {
        const { data } = dataType;
        let relatedCases = await caseQueries.getRelatedCases(dataType);

        let cases = await caseQueries.getCases(
          dataType,
          {},
          {
            // TBC company from token
            // owner: data.company,
            _id: { $in: relatedCases.map((c) => c._id) }
          },
          0,
          0,
          false
        );

        return NextResponse.json({
          relatedCases: cases[0].results
        });
      }
      case dataType.type == 'addProcedure': {
        const procedure = new Procedure(data);
        if (data.addToFollowUp) {
          await Case.findByIdAndUpdate(data.case, {
            $set: {
              addToFollowUp: true
            }
          });
        }
        procedure.createdDate = Date.now();
        await procedure.save();
        return NextResponse.json({
          success: true,
          procedure
        });
      }

      case dataType.type == 'deleteNotes': {
        await CaseNotes.findByIdAndDelete(data.noteId);
        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'saveNotes': {
        const notes = new CaseNotes(data.data);
        await notes.save();
        return NextResponse.json({
          success: true,
          notes
        });
      }

      case dataType.type == 'getNotes': {
        const notes = await CaseNotes.aggregate([
          {
            $match: { case: { $exists: true } }
          },
          {
            // Convert the 'case' string to an ObjectId
            $addFields: {
              caseObj: { $toObjectId: '$case' }
            }
          },
          {
            $lookup: {
              from: 'cases',
              localField: 'caseObj',
              foreignField: '_id',
              as: 'caseDetails'
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'user', // user is already an ObjectId
              foreignField: '_id',
              as: 'userDetails'
            }
          },
          {
            $unwind: '$caseDetails'
          },
          {
            $unwind: {
              path: '$userDetails',
              preserveNullAndEmptyArrays: true // This will include documents even if no user is found
            }
          }
        ]);

        return NextResponse.json({
          success: true,
          notes
        });
      }

      case dataType.type == 'getSessions': {
        let matchObj = {
          owner: data.company
        };

        const { resPerPage, pageNum, sort, language } = data;

        let limit = 25;

        let sortObj = { created: 1 };

        if (resPerPage) {
          limit = resPerPage;
        }

        let skipNum = 0;

        if (sort) {
          delete sortObj.created;
          sortObj[getSessionFieldName(sort, language)] = 1;
          if (sort[0] == '-') {
            sortObj[getSessionFieldName(sort, language)] *= -1;
          }
        }

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }

        if (data.f && data.t) {
          matchObj.nextSessionDate = { $gte: +data.f, $lte: +data.t };
        }

        if (data.search) {
          matchObj = {
            ...matchObj,
            ...data.search
          };
        }

        if (matchObj.case && matchObj.case.length == 24) {
          matchObj.case = new mongoose.Types.ObjectId(matchObj.case);
        }

        let sessions = await Session.aggregate([
          { $match: matchObj },
          // Populate 'case' field from 'cases' collection
          {
            $lookup: {
              from: 'cases',
              localField: 'case',
              foreignField: '_id',
              as: 'caseData'
            }
          },
          {
            $unwind: {
              path: '$caseData',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate case.caseStatus from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { caseStatusId: { $toObjectId: '$caseData.caseStatus' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$caseStatusId'] }
                  }
                }
              ],
              as: 'caseStatusData'
            }
          },
          {
            $unwind: {
              path: '$caseStatusData',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate case.court from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { courtId: { $toObjectId: '$caseData.court' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$courtId'] }
                  }
                }
              ],
              as: 'caseCourtData'
            }
          },
          {
            $unwind: {
              path: '$caseCourtData',
              preserveNullAndEmptyArrays: true
            }
          },
          // Step 1: Unwind the caseData.clients array
          {
            $unwind: {
              path: '$caseData.clients',
              preserveNullAndEmptyArrays: true
            }
          },
          // Step 2: Lookup full client details
          {
            $lookup: {
              from: 'clients',
              localField: 'caseData.clients.client',
              foreignField: '_id',
              as: 'clientDetail'
            }
          },
          // Step 3: Merge adjective + _id + clientDetail
          {
            $addFields: {
              clientMerged: {
                $mergeObjects: [
                  {
                    adjective: '$caseData.clients.adjective',
                    _id: '$caseData.clients._id'
                  },
                  { $arrayElemAt: ['$clientDetail', 0] }
                ]
              }
            }
          },
          // Step 4: Group back to array
          {
            $group: {
              _id: '$_id',
              sessionData: { $first: '$$ROOT' },
              populatedClients: { $push: '$clientMerged' }
            }
          },
          // Step 5: Reconstruct full session with updated case.clients
          {
            $addFields: {
              'sessionData.caseData.clients': '$populatedClients'
            }
          },
          // Step 6: Replace root
          {
            $replaceRoot: {
              newRoot: '$sessionData'
            }
          },

          // another part
          // Populate fileNo inside case from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { fileNoId: { $toObjectId: '$caseData.fileNo' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$fileNoId'] }
                  }
                }
              ],
              as: 'caseFileNoData'
            }
          },
          {
            $unwind: {
              path: '$caseFileNoData',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate governing from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { governing: { $toObjectId: '$governing' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$governing'] }
                  }
                }
              ],
              as: 'matchedValues_governing'
            }
          },
          {
            $unwind: {
              path: '$matchedValues_governing',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate main session.clients from 'clients' collection
          {
            $lookup: {
              from: 'clients',
              localField: 'clients',
              foreignField: '_id',
              as: 'clientsData'
            }
          },

          // Find the closest previous session based on sessionDate
          {
            $lookup: {
              from: 'sessions',
              let: { caseId: '$case', sessionDate: '$sessionDate' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$case', '$$caseId'] }, // Same case
                        { $lt: ['$sessionDate', '$$sessionDate'] } // Date is before current session
                      ]
                    }
                  }
                },
                { $sort: { sessionDate: -1 } }, // Get the most recent past session
                { $limit: 1 } // Only take one closest session
              ],
              as: 'previousSessionData'
            }
          },
          {
            $unwind: {
              path: '$previousSessionData',
              preserveNullAndEmptyArrays: true
            }
          },

          // Set final fields with populated data
          {
            $set: {
              case: {
                $mergeObjects: [
                  '$caseData',
                  { caseStatus: '$caseStatusData.values' },
                  { court: '$caseCourtData.values' },
                  { fileNo: '$caseFileNoData.values' }, // Add fileNo inside case
                  { clients: '$caseClientsData' }
                ]
              },
              fileNo: '$matchedValues_fileNo.values',
              governing: '$matchedValues_governing.values',
              clients: '$clientsData',
              previousSession: '$previousSessionData' // Attach the closest previous session
            }
          },
          { $sort: sortObj },
          {
            $facet: {
              results: [{ $skip: skipNum }, { $limit: limit }],
              count: [{ $count: 'total' }]
            }
          }
        ]);

        sessions.results = await Promise.all(
          sessions[0].results.map(async (session) => {
            session.case.clients = await Promise.all(
              session.case.clients.map(async (client) => {
                let id = client.adjective;
                let targetAdjectives = await CaseValue.findOne({
                  company: auth.company.toString(),
                  'values._id': client.adjective
                });
                client.adjective = targetAdjectives.values.find((i) => i._id == id);

                return client;
              })
            );

            session.case.opponents = await Promise.all(
              session.case.opponents.map(async (client) => {
                let id = client.adjective;
                let targetAdjectives = await CaseValue.findOne({
                  company: auth.company.toString(),
                  'values._id': client.adjective
                });
                client.adjective = targetAdjectives.values.find((i) => i._id == id);

                return client;
              })
            );

            return session;
          })
        );

        return NextResponse.json({
          success: true,
          sessions
        });
      }

      case dataType.type == 'addSession': {
        let formData = JSON.parse(dataType.data.get('form'));
        formData.created = Date.now();
        let session = new Session(formData);
        await session.save();
        return NextResponse.json({
          session,
          success: true
        });
      }

      case dataType.type == 'exportClaimStatement': {
        let columns = data.columns.map((field) => {
          return { header: field, key: getFieldName(field), width: 15 };
        });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');

        worksheet.columns = columns;

        const headerRow = worksheet.getRow(1);
        headerRow.eachCell((cell) => {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFA500' } // Yellow background
          };
          cell.font = { bold: true }; // Optional: Make text bold
          cell.alignment = { horizontal: 'center' }; // Optional: Center align text
        });

        data.rows.forEach((item) => {
          // let keys = Object.keys(item)
          if ('date' in item) {
            // TBC We may need to offer date formats when exporting
            item['date'] = new Date(item['date']).toDateString();
          }

          if (item.isPayment) {
            item.type = 'Payment';
            item['debit'] = item.amount;
            item.taxPercentage = '-';
          } else {
            item.type = 'Fees';
            item['credit'] = item.amount;
          }

          worksheet.addRow(item);
        });

        const buffer = await workbook.xlsx.writeBuffer();

        // Create the response
        return new Response(buffer, {
          headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename=output.xlsx'
          }
        });
      }

      case dataType.type == 'createInvoice': {
        let invoice = new ClientInvoice(dataType.data);
        await invoice.save();
        return NextResponse.json({ invoice, success: true });
      }

      case dataType.type == 'getClaims': {
        const { data } = dataType;

        let matchObj = {
          case: new mongoose.Types.ObjectId(data.caseID)
        };

        const { resPerPage, pageNum, sort } = data;

        let limit = 25;

        let sortObj = { date: 1 };

        if (resPerPage) {
          limit = resPerPage;
        }

        let skipNum = 0;

        if (sort) {
          sortObj[sort] = 1;
          if (sort[0] == '-') {
            sortObj[sort] *= -1;
          }
        }

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }

        let fetcedData = await ClientFees.aggregate([
          {
            $match: matchObj // Match case in ClientFees
          },
          {
            $unionWith: {
              coll: 'clientpayments', // Merge with ClientPayment collection
              pipeline: [
                { $match: { case: new mongoose.Types.ObjectId(data.caseID) } } // Match same case in ClientPayment
              ]
            }
          },
          { $sort: sortObj },
          {
            $facet: {
              results: [{ $skip: skipNum }, { $limit: limit }],
              count: [{ $count: 'total' }]
            }
          }
        ]);

        return NextResponse.json(fetcedData[0]);
      }

      case dataType.type == 'getIssuedInvoices': {
        const { resPerPage, pageNum, sort } = data;

        let matchObj = {
          case: new mongoose.Types.ObjectId(data.caseID)
        };
        let limit = 25;

        let sortObj = { invoiceDate: 1 };

        if (resPerPage) {
          limit = resPerPage;
        }

        let skipNum = 0;

        if (sort) {
          sortObj[sort] = 1;
          if (sort[0] == '-') {
            sortObj[sort] *= -1;
          }
        }

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }

        let invoices = await ClientInvoice.aggregate([
          {
            $match: matchObj
          },
          {
            $lookup: {
              from: 'cases',
              localField: 'case',
              foreignField: '_id',
              as: 'caseDetails'
            }
          },
          {
            $unwind: { path: '$caseDetails', preserveNullAndEmptyArrays: true }
          },
          {
            $lookup: {
              from: 'casevalues', // Collection containing values array
              let: { caseTypeId: { $toObjectId: '$caseDetails.caseType' } }, // Convert caseType to ObjectId
              pipeline: [
                { $unwind: '$values' }, // Unwind values array
                {
                  $match: {
                    $expr: {
                      $eq: ['$values._id', '$$caseTypeId'] // Match caseType (ObjectId) with values._id
                    }
                  }
                }
              ],
              as: 'matchedCaseType'
            }
          },
          {
            $set: {
              'caseDetails.caseType': { $arrayElemAt: ['$matchedCaseType.values', 0] } // Replace caseType with matched object
            }
          },
          {
            $unset: 'matchedCaseType' // Remove temporary field
          },
          {
            $set: { case: '$caseDetails' } // Replace original case field
          },
          {
            $unset: 'caseDetails' // Optional: Remove intermediate caseDetails if not needed
          },
          {
            $sort: sortObj
          },
          {
            $facet: {
              results: [{ $skip: skipNum }, { $limit: limit }],
              count: [{ $count: 'total' }]
            }
          }
        ]);

        // let invoices = await ClientInvoice.aggregate([
        //   {
        //     $match: matchObj
        //   },
        //   {
        //     $lookup: {
        //       from: 'cases', // Name of the "Cases" collection
        //       localField: 'case', // Field in "ClientInvoice" that stores the case ID
        //       foreignField: '_id', // Field in "Cases" collection that matches the ID
        //       as: 'caseDetails' // The field to store the populated data
        //     }
        //   },
        //   {
        //     $unwind: { path: '$caseDetails', preserveNullAndEmptyArrays: true } // Unwind if needed
        //   },
        //   {
        //     $set: { case: '$caseDetails' } // Replace original case field with populated case data
        //   },
        //   {
        //     $unset: 'caseDetails' // Remove the temporary caseDetails field
        //   },
        //   {
        //     $sort: sortObj
        //   },
        //   {
        //     $facet: {
        //       results: [{ $skip: skipNum }, { $limit: limit }],
        //       count: [{ $count: 'total' }]
        //     }
        //   }
        // ]);

        return NextResponse.json(invoices[0]);
      }

      case dataType.type == 'addFees': {
        let clientFees = new ClientFees(data);

        let updatedCase = await Case.findById(data.case);
        let caseBalance = updatedCase.balance || 0;
        caseBalance += data.amount;
        updatedCase.caseBalance = caseBalance;

        await clientFees.save();
        // update case balance field
        // await Case.findOneAndUpdate(
        //   { _id: data.case },
        //   { $inc: { balance: data.amount } },
        //   { new: true } // Returns the updated document
        // );

        return NextResponse.json({ success: true });
      }

      case dataType.type == 'addPayment': {
        let clientPayment = new ClientPayment(data);
        await clientPayment.save();

        // update case balance field
        let updatedCase = await Case.findById(data.case);
        let caseBalance = updatedCase.balance || 0;
        caseBalance -= data.amount;
        updatedCase.caseBalance = caseBalance;

        return NextResponse.json({ success: true });
      }

      case dataType.type == 'getOpponents': {
        let opponents = await Opponent.find({
          _id: { $in: dataType.data.ids }
        });

        return NextResponse.json({ opponents });
      }

      case dataType.type == 'caseStatus':
        // const groupingFactor = `$caseStatus.name` + dataType.data.group;

        let cases = await Case.aggregate([
          // ... (previous stages, including $lookup and $set for caseStatus)
          {
            $lookup: {
              from: 'casevalues',
              let: { caseStatus: { $toObjectId: '$caseStatus' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: {
                      $eq: ['$values._id', '$$caseStatus']
                    }
                  }
                }
              ],
              as: 'matchedValues_caseStatus'
            }
          },
          {
            $unwind: {
              path: '$matchedValues_caseStatus',
              preserveNullAndEmptyArrays: true
            }
          },
          // Set the caseStatus field to the value from the lookup.
          {
            $set: {
              caseStatus: '$matchedValues_caseStatus.values'
            }
          },
          // Group by the _id inside caseStatus
          {
            $group: {
              _id: '$caseStatus._id',
              count: { $sum: 1 },
              cases: { $push: '$$ROOT' },
              nameEn: { $first: '$caseStatus.nameEn' },
              nameAr: { $first: '$caseStatus.nameAr' }
            }
          }
        ]);

        return NextResponse.json({
          cases,
          success: true
        });

        break;

      case dataType.type == 'getCaseFormData': {
        // TBC, company should be received from token in middlware

        let systemValues = await CaseValue.find({
          company: auth.company._id.toString(),
          groupTitle: {
            $in: addFormValues
          }
        });

        let attorneys = await User.find({
          company: auth.company._id.toString(),
          type: 'ATTORNEY'
        });

        systemValues.push({
          groupTitle: 'ATTORNEY',
          values: attorneys
        });

        let counsel = await User.find({
          company: auth.company._id.toString(),
          type: 'COUNSEL'
        });

        systemValues.push({
          groupTitle: 'COUNSEL',
          values: counsel
        });

        return NextResponse.json({
          systemValues,
          success: true
        });
      }

      case dataType.type == 'getCase': {
        console.log('case find hone aya');
        console.log(dataType.data.caseId);
        // TBC-company check from user after middleware implementaton

        let caseFound = await caseQueries.getCase(dataType);

        return NextResponse.json({
          case: caseFound
        });
      }

      case dataType.type == 'getCases': {
        let matchObj = {
          owner: auth.company.toString()
        };

        if (dataType.data.designated) {
          matchObj.desginatedAttorney = auth._id.toString();
        }

        if (dataType.data.search) {
          matchObj = { ...matchObj, ...dataType.search };
        }

        let skipNum = 0;
        const limit = dataType.data.resPerPage || 5;
        const { pageNum, sort, language } = dataType.data;

        const sortObj = {};

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }

        if (sort) {
          sortObj[getCaseFieldName(sort, language)] = 1;
          if (sort[0] == '-') {
            sortObj[getCaseFieldName(sort, language)] *= -1;
          }
        }

        let cases = await caseQueries.getCases(dataType, sortObj, matchObj, skipNum, limit, sort);

        // const aggrObj = [
        //   {
        //     $match: matchObj
        //   },
        //   {
        //     $lookup: {
        //       from: 'casevalues', // Casevalues collection
        //       let: { courtId: { $toObjectId: '$court' } }, // Convert court to ObjectId
        //       pipeline: [
        //         { $unwind: '$values' }, // Unwind the values array
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: ['$values._id', '$$courtId'] // Match court with values._id
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedValues'
        //     }
        //   },
        //   {
        //     $unwind: {
        //       path: '$matchedValues',
        //       preserveNullAndEmptyArrays: true // Preserve cases with no matches
        //     }
        //   },
        //   {
        //     $lookup: {
        //       from: 'casevalues', // Casevalues collection
        //       let: { fileNo: { $toObjectId: '$fileNo' } }, // Convert court to ObjectId
        //       pipeline: [
        //         { $unwind: '$values' }, // Unwind the values array
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: ['$values._id', '$$fileNo'] // Match court with values._id
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedValues_fileNo'
        //     }
        //   },
        //   {
        //     $unwind: {
        //       path: '$matchedValues_fileNo',
        //       preserveNullAndEmptyArrays: true // Preserve cases with no matches
        //     }
        //   },
        //   // ****************
        //   {
        //     $lookup: {
        //       from: 'casevalues', // Casevalues collection
        //       let: { governing: { $toObjectId: '$governing' } }, // Convert court to ObjectId
        //       pipeline: [
        //         { $unwind: '$values' }, // Unwind the values array
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: ['$values._id', '$$governing'] // Match court with values._id
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedValues_governing'
        //     }
        //   },
        //   {
        //     $unwind: {
        //       path: '$matchedValues_governing',
        //       preserveNullAndEmptyArrays: true // Preserve cases with no matches
        //     }
        //   },
        //   // ***********************************
        //   {
        //     $lookup: {
        //       from: 'casevalues', // Casevalues collection
        //       let: { caseStatus: { $toObjectId: '$caseStatus' } }, // Convert court to ObjectId
        //       pipeline: [
        //         { $unwind: '$values' }, // Unwind the values array
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: ['$values._id', '$$caseStatus'] // Match court with values._id
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedValues_caseStatus'
        //     }
        //   },
        //   {
        //     $unwind: {
        //       path: '$matchedValues_caseStatus',
        //       preserveNullAndEmptyArrays: true // Preserve cases with no matches
        //     }
        //   },
        //   // {
        //   //   $lookup: {
        //   //     from: 'clients', // Clients collection
        //   //     localField: 'clients', // Field in Case referencing clients
        //   //     foreignField: '_id', // Field in Clients collection
        //   //     as: 'clientsData' // Populated data will be in this field
        //   //   }
        //   // },
        //   {
        //     $lookup: {
        //       from: 'clients', // Clients collection
        //       let: { clientIds: { $map: { input: '$clients', as: 'c', in: '$$c.client' } } },
        //       pipeline: [
        //         {
        //           $match: {
        //             $expr: { $in: ['$_id', '$$clientIds'] }
        //           }
        //         }
        //       ],
        //       as: 'clientsData'
        //     }
        //   },
        //   {
        //     $set: {
        //       clientsData: {
        //         $map: {
        //           input: '$clientsData',
        //           as: 'clientObj',
        //           in: {
        //             $mergeObjects: [
        //               '$$clientObj', // Original client object from lookup
        //               {
        //                 adjective: {
        //                   $arrayElemAt: [
        //                     {
        //                       $map: {
        //                         input: {
        //                           $filter: {
        //                             input: '$clients',
        //                             as: 'c',
        //                             cond: { $eq: ['$$c.client', '$$clientObj._id'] }
        //                           }
        //                         },
        //                         as: 'filteredClient',
        //                         in: '$$filteredClient.adjective'
        //                       }
        //                     },
        //                     0
        //                   ]
        //                 }
        //               }
        //             ]
        //           }
        //         }
        //       }
        //     }
        //   },
        //   {
        //     $unwind: '$clientsData'
        //   },
        //   {
        //     $lookup: {
        //       from: 'casevalues',
        //       let: { adjectiveId: { $toObjectId: '$clientsData.adjective' } },
        //       pipeline: [
        //         { $unwind: '$values' },
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: [
        //                 { $toString: '$values._id' }, // Convert to string for comparison
        //                 { $toString: '$$adjectiveId' }
        //               ]
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedAdjectiveClient'
        //     }
        //   },
        //   {
        //     $set: {
        //       'clientsData.adjective': { $arrayElemAt: ['$matchedAdjectiveClient.values', 0] }
        //     }
        //   },
        //   {
        //     $group: {
        //       _id: '$_id',
        //       clientsData: { $push: '$clientsData' },
        //       otherFields: { $first: '$$ROOT' }
        //     }
        //   },
        //   {
        //     $replaceRoot: {
        //       newRoot: {
        //         $mergeObjects: [
        //           '$otherFields',
        //           { clientsData: '$clientsData', matchedAdjectiveClient: '$matchedAdjectiveClient' }
        //         ]
        //       }
        //     }
        //   },

        //   {
        //     $unwind: '$opponents'
        //   },
        //   {
        //     $lookup: {
        //       from: 'casevalues',
        //       let: { adjectiveId: { $toObjectId: '$opponents.adjective' } },
        //       pipeline: [
        //         { $unwind: '$values' },
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: [
        //                 { $toString: '$values._id' }, // Convert to string for comparison
        //                 { $toString: '$$adjectiveId' }
        //               ]
        //             }
        //           }
        //         }
        //       ],
        //       as: 'matchedAdjective'
        //     }
        //   },
        //   {
        //     $set: {
        //       'opponents.adjective': { $arrayElemAt: ['$matchedAdjective.values', 0] }
        //     }
        //   },
        //   {
        //     $group: {
        //       _id: '$_id',
        //       opponents: { $push: '$opponents' },
        //       otherFields: { $first: '$$ROOT' }
        //     }
        //   },
        //   {
        //     $replaceRoot: {
        //       newRoot: {
        //         $mergeObjects: ['$otherFields', { opponents: '$opponents', matchedAdjective: '$matchedAdjective' }]
        //       }
        //     }
        //   },
        //   {
        //     $set: {
        //       caseStatus: '$matchedValues_caseStatus.values',
        //       governing: '$matchedValues_governing.values',
        //       court: '$matchedValues.values', // Replace court field with matched value
        //       fileNo: '$matchedValues_fileNo.values', // Replace fileNo field with matched value
        //       clients: '$clients'
        //     }
        //   },

        //   {
        //     $set: {
        //       caseStatus: '$matchedValues_caseStatus.values',
        //       governing: '$matchedValues_governing.values',
        //       court: '$matchedValues.values', // Replace court field with matched value
        //       fileNo: '$matchedValues_fileNo.values', // Replace court field with matched value
        //       clients: '$clientsData'
        //     }
        //   },
        //   // { $sort: sortObj },
        //   {
        //     $facet: {
        //       results: [{ $skip: skipNum }, { $limit: limit }],
        //       count: [{ $count: 'total' }]
        //     }
        //   }
        //   // {
        //   //   $project: {
        //   //     _id: 1,
        //   //     court: 1,
        //   //     clients: 1 // Include necessary fields
        //   //   }
        //   // }
        // ];

        // if (sort) {
        //   let targtKey = Object.keys(sortObj);
        //   aggrObj.splice(
        //     aggrObj.length - 1,
        //     0,
        //     {
        //       $addFields: {
        //         sortField: {
        //           $cond: {
        //             if: { $eq: [{ $type: '$' + targtKey[0] }, 'string'] },
        //             then: { $trim: { input: { $toLower: '$' + targtKey[0] } } },
        //             else: '$' + targtKey[0]
        //           }
        //         } // Convert to lowercase
        //       }
        //     },
        //     {
        //       $sort: { sortField: sortObj[targtKey[0]] }
        //     }
        //   );
        // }

        // // Issue, we are passing hard-code strings from the front-end now
        // if (dataType.data.status) {
        //   aggrObj.splice(aggrObj.length - 1, 0, {
        //     $match: { 'caseStatus._id': new mongoose.Types.ObjectId(dataType.data.status) }
        //   });
        // }

        // // TBC-company check from user after middleware implementaton
        // let cases = await Case.aggregate(aggrObj);

        return NextResponse.json({
          cases,
          success: true
        });
      }

      case dataType.type == 'updateCase': {
        let caseUpdated = await Case.findByIdAndUpdate(dataType.data._id, {
          $set: {
            updatedAt: new Date(),
            ...dataType.data
          }
        });

        // let newCase = new Case(dataType.data);
        // console.log(dataType.data);

        // TBC get it from the token middleware
        // newCase.owner = dataType.data.owner;
        // newCase.updatedAt = new Date();

        // each case will have multiple clients too

        // dataType.data.clients.forEach((client) => {
        //   // Add up all the clients to the case
        //   newCase.clients.push(client._id);
        // });

        // dataType.data.opponents.forEach((client) => {
        //   // Add up all the clients to the case
        //   newCase.opponents.push(client._id);
        // });

        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'addCase': {
        let newCase = new Case(dataType.data);
        console.log(dataType.data);

        if (dataType.data.opType == 'relative') {
          await Case.findByIdAndUpdate(
            dataType.data.relative[0],
            { $addToSet: { relative: newCase._id.toString() } }, // Adds only if not already present
            { new: true } // Returns the updated document
          );
        }

        // TBC get it from the token middleware
        newCase.owner = dataType.data.owner;
        newCase.createdAt = new Date();

        // each case will have multiple clients too

        // dataType.data.clients.forEach((client) => {
        //   // Add up all the clients to the case
        //   newCase.clients.push(client._id);
        // });

        // dataType.data.opponents.forEach((client) => {
        //   // Add up all the clients to the case
        //   newCase.opponents.push(client._id);
        // });

        await newCase.save();
        return NextResponse.json({
          success: true
        });
      }
    }
  } catch (e) {
    console.log(e.message);
    return NextResponse.json(e);
  }
}
