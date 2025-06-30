import { NextResponse } from 'next/server';
import { Client } from '../../../../models/client';
import { getDataType } from '@/app/lib/utils';
import CaseValue from '@/models/SystemValue';
import { ClientInvoice } from '@/models/clientInvoice';
import { ClientFees } from '@/models/clientFees';
let mongoose = require('mongoose');
import ClientQueries from './queries';
import ExcelJS from 'exceljs';
import { getReimbursementField } from '@/models/clientReimburstment';
import { ClientReimbursement } from '@/models/clientReimburstment';

// import { clientsForm } from "../../../models/Clients";

export async function POST(req) {
  let data = await getDataType(req);

  switch (data.type) {
    case 'exportReimbursements': {
      let columns = data.data.columns.map((field) => {
        return { header: field, key: getReimbursementField(field), width: 15 };
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

      data.data.rows.forEach((item) => {
        // let keys = Object.keys(item)
        if ('paymentDate' in item) {
          // TBC We may need to offer date formats when exporting
          item['paymentDate'] = new Date(item['paymentDate']).toDateString();
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

      return NextResponse.json({
        success: true,
        reimbursements
      });
    }

    case 'getReimbursements': {
      let reimbursements = await ClientReimbursement.aggregate([
        {
          $match: { case: new mongoose.Types.ObjectId(data.data.caseID) }
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
          $unwind: '$caseDetails' // Unwind case details if only one case is expected
        },
        {
          $lookup: {
            from: 'users', // The users collection
            localField: 'user', // The user ID stored in ClientReimbursement
            foreignField: '_id', // The _id field in the users collection
            as: 'userDetails'
          }
        },
        {
          $unwind: {
            path: '$userDetails',
            preserveNullAndEmptyArrays: true // Keep reimbursement even if no user is found
          }
        }
      ]);

      return NextResponse.json({
        success: true,
        reimbursements
      });
    }

    case 'addReimbursement': {
      let reimburstment = new ClientReimbursement(data.data);
      reimburstment.reimbursementStatus = 'Paid';
      await reimburstment.save();
      return NextResponse.json({
        success: true,
        reimburstment
      });
    }

    case 'addClientfees': {
      data.data.invoiceCode = await ClientFees.countDocuments({ client: data.data.client });
      data.data.invoiceDate = Date.now();
      let clientFees = new ClientFees(data.data);
      await clientFees.save();

      return NextResponse.json({
        clientFees,
        success: true
      });
    }

    case 'addClientInvoice': {
      data.data.invoiceCode = await ClientInvoice.countDocuments({ client: data.data.client });
      data.data.invoiceDate = Date.now();
      let clientInvoice = new ClientInvoice(data.data);
      await clientInvoice.save();

      return NextResponse.json({
        clientInvoice,
        success: true
      });
    }

    case 'getClientInvoices': {
      const { data } = data;

      const { resPerPage, pageNum, sort } = data;

      let matchObj = {
        client: data.client
      };
      let limit = 25;

      let sortObj = {};

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

      let invoices = await ClientInvoice.aggregate([
        {
          $match: matchObj
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
        invoices,
        success: true
      });
    }

    case 'addClient': {
      data.data.clientCode = (await Client.countDocuments()) + 1;
      console.log(data);

      // TBC, the company prop should be passed
      let client = new Client(data.data);
      await client.save();

      return NextResponse.json({
        client,
        success: true
      });
    }

    case 'getClient': {
      console.log('getClient called');
      console.log(data.data.id);
      const objectId = new mongoose.Types.ObjectId(data.data.id);
      const client = await Client.aggregate([
        { $match: { _id: objectId } },
        {
          $lookup: {
            from: 'casevalues', // Casevalues collection
            let: { legalForm: { $toObjectId: '$legalForm' } }, // Convert court to ObjectId
            pipeline: [
              { $unwind: '$values' }, // Unwind the values array
              {
                $match: {
                  $expr: {
                    $eq: ['$values._id', '$$legalForm'] // Match court with values._id
                  }
                }
              }
            ],
            as: 'matchedValues_legalForm'
          }
        },
        {
          $unwind: {
            path: '$matchedValues_legalForm',
            preserveNullAndEmptyArrays: true // Preserve cases with no matches
          }
        },
        {
          $set: {
            legalForm: '$matchedValues_legalForm.values'
          }
        }
      ]);
      console.log(client);

      return NextResponse.json({
        client,
        success: true
      });
    }

    case 'getClients': {
      // TBC, add company

      let clients = await ClientQueries.getClients(data);
      console.log(clients);
      return NextResponse.json({
        clients,
        success: true
      });
    }

    default:
      return NextResponse.json({
        success: false
      });
  }
}
