import { getDataType } from '@/app/lib/utils';
import { Case } from '@/models/case';
import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import { Client, getFieldName } from '@/models/client';

// import dbConnect from "@/app/lib/db";

// GET /api/logs
export async function POST(req, res) {
  console.log('REPORT request received');
  try {
    let { data } = await getDataType(req);

    switch (data.reportName) {
      case 'invoice':
        let columns = data.columns.map((field) => {
          return { header: field, key: getFieldName(field), width: 15 };
        });

        let clients;

        if (data['all-clients']) {
          // TBC attach company in here
          clients = await Client.find({});
        } else {
          clients = [await Client.findById(data['target-client'])];
        }

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');

        worksheet.columns = columns;

        const r_data = [];

        clients.forEach((client) => {
          client = client.toJSON();
          let obj = {};
          for (let col of columns) {
            obj[col.key] = client[col.key];
        }
        r_data.push(obj);
        });

        // worksheet.columns = [
        //     { header: 'ID', key: 'id', width: 10 },
        //     { header: 'Name', key: 'name', width: 30 },
        //     { header: 'Age', key: 'age', width: 10 },
        //     { header: 'Email', key: 'email', width: 30 }
        // ];

        // const r_data = [
        //   { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
        //   { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
        //   { id: 3, name: 'Alice Brown', age: 25, email: 'alice@example.com' }
        // ];

        r_data.forEach((item) => worksheet.addRow(item));

        const buffer = await workbook.xlsx.writeBuffer();

        // Create the response
        return new Response(buffer, {
          headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename=output.xlsx'
          }
        });

    }

    console.log(data);
  } catch (e) {
    NextResponse.json(e);
  }
}
