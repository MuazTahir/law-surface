import { getDataType } from '@/app/lib/utils';
import { Meeting } from '@/models/meeting';
import { Procedure } from '@/models/procedure';
import { Remainder } from '@/models/reamainder';
import { NextResponse } from 'next/server';
import utilities from '@/utilities/utilities';
import moment from 'moment';
import { WorkTime } from '@/models/workingTimer';
import { LinkManager } from '@/models/linkManger';
import { isAuthenticated } from '@/app/lib/session-contol';

export async function POST(req) {
  let dataType = await getDataType(req);

  let auth = await isAuthenticated(req, dataType);

  if (!auth) {
    return NextResponse.status(403).json({
      message: 'Not Authorized'
    });
  }

  console.log(dataType);
  try {
    switch (true) {
      case dataType.type == 'getUserLinks': {
        let linkM = await LinkManager.findOne({ createdBy: dataType.data.userId });
        return NextResponse.json({
          success: true,
          links: linkM?.links
        });
      }

      case dataType.type == 'updateUserLinks': {
        // TBC should be moved in utils

        let userId = auth._id.toString();

        let linkM = await LinkManager.findOne({ createdBy: userId });

        if (!linkM) {
          linkM = new LinkManager({
            createdBy: userId,
            links: dataType.data.links,
            owner: auth.company
          });
          await linkM.save();
        } else {
          await LinkManager.findByIdAndUpdate(linkM._id, { $set: { links: dataType.data.links } });
        }

        return NextResponse.json({
          success: true,
          linkM
        });
      }

      case dataType.type == 'setFollowProcedure': {
        let resp = await Procedure.findByIdAndUpdate(dataType.data.id, {
          $set: {
            addToFollowUp: dataType.data.value
          }
        });
        return NextResponse.json({
          success: true,
          resp
        });
      }

      case dataType.type == 'getProcecduresForCase': {
        const { data } = dataType;
        const { resPerPage, sort, pageNum } = data;
        const matchObj = {
          // archived: false,
          owner: data.company
        };
        let limit = 25;

        let sortObj = {
          createdDate: 1
        };

        if (resPerPage) {
          limit = resPerPage;
        }

        if (sort) {
          sortObj[sort] = 1;
          if (sort[0] == '-') {
            sortObj[sort] *= -1;
          }
        }

        let skipNum = 0;

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }
        let procedures = await Procedure.aggregate([
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

          // Populate procedures_type from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { governing: { $toObjectId: '$procedures_status' } },
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

          {
            $lookup: {
              from: 'casevalues',
              let: { procedures_type: { $toObjectId: '$procedures_type' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$procedures_type'] }
                  }
                }
              ],
              as: 'procedures_type'
            }
          },
          {
            $unwind: {
              path: '$procedures_type',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate main session.clients from 'clients' collection
          // {
          //   $lookup: {
          //     from: 'clients',
          //     localField: 'clients',
          //     foreignField: '_id',
          //     as: 'clientsData'
          //   }
          // },

          // Find the closest previous session based on sessionDate
          // {
          //   $lookup: {
          //     from: 'sessions',
          //     let: { caseId: '$case', sessionDate: '$sessionDate' },
          //     pipeline: [
          //       {
          //         $match: {
          //           $expr: {
          //             $and: [
          //               { $eq: ['$case', '$$caseId'] }, // Same case
          //               { $lt: ['$sessionDate', '$$sessionDate'] } // Date is before current session
          //             ]
          //           }
          //         }
          //       },
          //       { $sort: { sessionDate: -1 } }, // Get the most recent past session
          //       { $limit: 1 } // Only take one closest session
          //     ],
          //     as: 'previousSessionData'
          //   }
          // },
          // {
          //   $unwind: {
          //     path: '$previousSessionData',
          //     preserveNullAndEmptyArrays: true
          //   }
          // },

          // Set final fields with populated data
          {
            $set: {
              case: {
                $mergeObjects: [
                  '$caseData',
                  { caseStatus: '$caseStatusData.values' },
                  { court: '$caseCourtData.values' },
                  { fileNo: '$caseFileNoData.values' } // Add fileNo inside case
                  // { clients: '$caseClientsData' }
                ]
              },
              fileNo: '$matchedValues_fileNo.values',
              procedures_status: '$matchedValues_governing.values',
              clients: '$clientsData'
              // previousSession: '$previousSessionData' // Attach the closest previous session
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
        return NextResponse.json({
          success: true,
          procedures
        });
      }

      case dataType.type == 'getProceduresFollowup': {
        const { data } = dataType;
        const { resPerPage, sort, pageNum } = data;
        const matchObj = {
          // archived: false,
          owner: data.company,
          // We fetch only those procedures which are followed up
          addToFollowUp: true
        };
        let limit = 25;

        let sortObj = {
          createdDate: 1
        };

        if (resPerPage) {
          limit = resPerPage;
        }

        if (sort) {
          sortObj[sort] = 1;
          if (sort[0] == '-') {
            sortObj[sort] *= -1;
          }
        }

        let skipNum = 0;

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }
        let procedures = await Procedure.aggregate([
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

          // Populate procedures_type from 'casevalues'
          {
            $lookup: {
              from: 'casevalues',
              let: { governing: { $toObjectId: '$procedures_status' } },
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

          {
            $lookup: {
              from: 'casevalues',
              let: { procedures_type: { $toObjectId: '$procedures_type' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$procedures_type'] }
                  }
                }
              ],
              as: 'procedures_type'
            }
          },
          {
            $unwind: {
              path: '$procedures_type',
              preserveNullAndEmptyArrays: true
            }
          },

          // Populate main session.clients from 'clients' collection
          // {
          //   $lookup: {
          //     from: 'clients',
          //     localField: 'clients',
          //     foreignField: '_id',
          //     as: 'clientsData'
          //   }
          // },

          // Find the closest previous session based on sessionDate
          // {
          //   $lookup: {
          //     from: 'sessions',
          //     let: { caseId: '$case', sessionDate: '$sessionDate' },
          //     pipeline: [
          //       {
          //         $match: {
          //           $expr: {
          //             $and: [
          //               { $eq: ['$case', '$$caseId'] }, // Same case
          //               { $lt: ['$sessionDate', '$$sessionDate'] } // Date is before current session
          //             ]
          //           }
          //         }
          //       },
          //       { $sort: { sessionDate: -1 } }, // Get the most recent past session
          //       { $limit: 1 } // Only take one closest session
          //     ],
          //     as: 'previousSessionData'
          //   }
          // },
          // {
          //   $unwind: {
          //     path: '$previousSessionData',
          //     preserveNullAndEmptyArrays: true
          //   }
          // },

          // Set final fields with populated data
          {
            $set: {
              case: {
                $mergeObjects: [
                  '$caseData',
                  { caseStatus: '$caseStatusData.values' },
                  { court: '$caseCourtData.values' },
                  { fileNo: '$caseFileNoData.values' } // Add fileNo inside case
                  // { clients: '$caseClientsData' }
                ]
              },
              fileNo: '$matchedValues_fileNo.values',
              procedures_status: '$matchedValues_governing.values',
              clients: '$clientsData'
              // previousSession: '$previousSessionData' // Attach the closest previous session
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
        return NextResponse.json({
          success: true,
          procedures
        });
      }

      case dataType.type == 'getMeetings': {
        let meetings;

        if (dataType.data.summary) {
          meetings = await Meeting.find({}).limit(dataType.data.limit);
        } else {
          console.log('meeting aggregation started');
          meetings = await Meeting.aggregate([
            {
              $unwind: {
                path: '$attachments',
                preserveNullAndEmptyArrays: true // Preserve meetings without attachments
              }
            },
            {
              $set: {
                'attachments.caseId': {
                  $cond: [
                    {
                      $and: [
                        { $ifNull: ['$attachments.caseId', false] },
                        { $eq: [{ $strLenBytes: '$attachments.caseId' }, 24] }
                      ]
                    },
                    { $toObjectId: '$attachments.caseId' },
                    null
                  ]
                }
              }
            },
            {
              $lookup: {
                from: 'cases',
                localField: 'attachments.caseId',
                foreignField: '_id',
                as: 'caseDetails'
              }
            },
            {
              $unwind: {
                path: '$caseDetails',
                preserveNullAndEmptyArrays: true // Keep if no matching case is found
              }
            },
            {
              $set: {
                'attachments.caseId': '$caseDetails' // Replace caseId with case details
              }
            },
            {
              $project: {
                caseDetails: 0 // Remove temporary field
              }
            },
            {
              $lookup: {
                from: 'users', // Lookup users collection
                localField: 'createdBy', // Meeting's createdBy field
                foreignField: '_id', // User's _id field
                as: 'createdByDetails'
              }
            },
            {
              $unwind: {
                path: '$createdByDetails',
                preserveNullAndEmptyArrays: true // Keep if no matching user is found
              }
            },
            {
              $set: {
                createdBy: '$createdByDetails'
              }
            }
          ]);
        }

        return NextResponse.json({
          success: true,
          meetings
        });
      }

      case dataType.type == 'getReminders': {
        // TBC-company check and createdBy  from user after middleware implementaton
        // const { createdBy } = dataType.data;

        let reminders;

        if (dataType.data.summary) {
          reminders = await Remainder.find({
            owner: company
          }).limit(10);
        } else {
          console.log('meeting aggregation started');

          const matchObj = {
            owner: auth.company.toString(),
            createdBy: auth._id.toString()
          };

          if (dataType.data.caseID) {
            matchObj.case = dataType.data.caseID;
          }

          reminders = await Remainder.aggregate([
            { $match: matchObj },
            {
              $addFields: {
                caseObjectId: {
                  $cond: [{ $ne: ['$case', null] }, { $toObjectId: '$case' }, null]
                }
              }
            },
            {
              $lookup: {
                from: 'cases',
                localField: 'caseObjectId',
                foreignField: '_id',
                as: 'case'
              }
            },
            {
              $unwind: {
                path: '$case',
                preserveNullAndEmptyArrays: true
              }
            },
            {
              $project: {
                caseObjectId: 0 // hide the intermediate field
              }
            },
            {
              $lookup: {
                from: 'casevalues', // Casevalues collection
                let: { caseStatus: { $toObjectId: '$case.caseStatus' } }, // Convert court to ObjectId
                pipeline: [
                  { $unwind: '$values' }, // Unwind the values array
                  {
                    $match: {
                      $expr: {
                        $eq: ['$values._id', '$$caseStatus'] // Match court with values._id
                      }
                    }
                  }
                ],
                as: 'matchedValues'
              }
            },
            {
              $unwind: {
                path: '$matchedValues',
                preserveNullAndEmptyArrays: true
              }
            },
            {
              $addFields: {
                'case.caseStatus': '$matchedValues.values'
              }
            },
            {
              $project: {
                matchedValues: 0
              }
            }
          ]);

          // reminders = await Remainder.aggregate([
          //   {
          //     $unwind: '$attachments' // Unwind the attachments array
          //   },
          //   {
          //     $set: {
          //       'attachments.caseId': {
          //         $cond: [
          //           {
          //             $and: [
          //               { $ifNull: ['$attachments.caseId', false] },
          //               { $eq: [{ $strLenBytes: '$attachments.caseId' }, 24] }
          //             ]
          //           },
          //           { $toObjectId: '$attachments.caseId' },
          //           null
          //         ]
          //       }
          //     }
          //   },            {
          //     $lookup: {
          //       from: 'cases',
          //       localField: 'attachments.caseId',
          //       foreignField: '_id',
          //       as: 'caseDetails'
          //     }
          //   },
          //   {
          //     $unwind: '$caseDetails' // Flatten the caseDetails array
          //   },
          //   {
          //     $set: {
          //       'attachments.caseId': '$caseDetails' // Replace caseId with the full object
          //     }
          //   },
          //   {
          //     $project: {
          //       caseDetails: 0 // Optional: Remove the temporary field after merging
          //     }
          //   }
          // ]);
        }

        // TBC-company check from user after middleware implementaton
        // let meetings = await Meeting.find({});

        return NextResponse.json({
          success: true,
          reminders
        });
      }

      case dataType.type == 'controlTimer': {
        console.log('meetinh add hori');

        if (dataType.data.flag == false) {
          let meeting = await WorkTime.findById(dataType.data.noteId);
          let startedAt = meeting.meetingStartedAt;
          if (startedAt) {
            meeting.completed = true;
            meeting.duration = utilities.getFormattedTimeDifference(moment(startedAt), moment(Date.now()));
            await meeting.save();
            return NextResponse.json({
              success: true,
              meeting
            });
          }
        } else {
          await WorkTime.findByIdAndUpdate(dataType.data.noteId, {
            $set: {
              startTime: Date.now(),
              started: dataType.data.flag
            }
          });
          return NextResponse.json({
            success: true
          });
        }
      }

      case dataType.type == 'addTimer': {
        let timer = new WorkTime(dataType.data);
        await timer.save();
        return NextResponse.json({
          success: true,
          timer
        });
      }

      case dataType.type == 'controlMeeting': {
        console.log('meetinh add hori');

        if (dataType.data.flag == false) {
          let meeting = await Meeting.findById(dataType.data.noteId);
          let startedAt = meeting.meetingStartedAt;
          if (startedAt) {
            meeting.completed = true;
            meeting.duration = utilities.getFormattedTimeDifference(moment(startedAt), moment(Date.now()));
            await meeting.save();
            return NextResponse.json({
              success: true,
              meeting
            });
          }
        } else {
          await Meeting.findByIdAndUpdate(dataType.data.noteId, {
            $set: {
              meetingStartedAt: Date.now(),
              meetingStarted: dataType.data.flag
            }
          });
          return NextResponse.json({
            success: true
          });
        }
      }

      case dataType.type == 'addMeeting': {
        console.log('meetinh add hori');
        dataType.data.createdAt = Date.now();
        let newMeeting = new Meeting(dataType.data);
        await newMeeting.save();
        return NextResponse.json({
          meeting: newMeeting,
          success: true
        });
      }

      case dataType.type == 'deleteReminder': {
        console.log('reminder deleted hori');
        let newMeeting = await Remainder.findByIdAndDelete(dataType.data.reminderId);
        return NextResponse.json({
          success: true,
          reminder: newMeeting
        });
      }

      case dataType.type == 'addReminder': {
        console.log('reminder add hori');
        let newMeeting = new Remainder(dataType.data);
        newMeeting.createdDate = Date.now();
        await newMeeting.save();
        return NextResponse.json({
          success: true,
          reminder: newMeeting
        });
      }
    }

    return NextResponse.json({
      success: false
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
