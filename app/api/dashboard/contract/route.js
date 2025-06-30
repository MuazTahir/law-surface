import { getDataType } from '@/app/lib/utils';
import { Contract, getFieldName } from '@/models/contract';
import { Client } from '@/models/client';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    let incoming = await getDataType(req);

    console.log(incoming);

    switch (true) {
      case incoming.type == 'getContracts': {
        const { data } = incoming;
        const { resPerPage, pageNum, sort, Language } = data;

        let limit = 25;

        let sortObj = { date: 1 };

        if (resPerPage) {
          limit = resPerPage;
        }

        let skipNum = 0;

        if (sort) {
          sortObj[getFieldName(sort, Language)] = 1;
          if (sort[0] == '-') {
            sortObj[getFieldName(sort, Language)] *= -1;
          }
        }

        if (pageNum) {
          skipNum = (pageNum - 1) * limit;
        }

        // TBC company to be passed here
        let contracts = await Contract.aggregate([
          {
            $lookup: {
              from: 'clients', // Collection name of the referenced model
              localField: 'client', // Field in Contract collection
              foreignField: '_id', // Field in Clients collection
              as: 'clientData' // New field to store populated data
            }
          },
          { $unwind: '$clientData' }, // Convert clientData array into an object
          {
            $set: { client: '$clientData' } // Set clientData to client field
          },
          { $unset: 'clientData' }, // Remove clientData field
          {
            $lookup: {
              from: 'casevalues',
              let: { caseStatusId: { $toObjectId: '$contractType' } },
              pipeline: [
                { $unwind: '$values' },
                {
                  $match: {
                    $expr: { $eq: ['$values._id', '$$caseStatusId'] }
                  }
                }
              ],
              as: 'contractTypeData'
            }
          },
          {
            $set: { contractType: { $arrayElemAt: ['$contractTypeData', 0] } }
          },
          { $unset: 'contractTypeData' },
          {
            $unwind: {
              path: '$contractTypeData',
              preserveNullAndEmptyArrays: true
            }
          },
          { $sort: sortObj }, // Apply sorting
          {
            $facet: {
              results: [
                { $skip: skipNum }, // Apply pagination
                { $limit: limit }
              ],
              count: [
                { $count: 'total' } // Count the total documents *before* pagination
              ]
            }
          }
        ]);

        return NextResponse.json({
          success: true,
          contracts
        });
      }

      case incoming.type == 'addContract': {
        // let data = await req.json()
        // console.log(data)
        let contract = new Contract(incoming.data);
        await contract.save();

        return NextResponse.json({
          success: true,
          contract,
          message: 'Contract added successfully'
        });
      }

      case incoming.type == 'deleteContract': {
        let data = await req.json();

        Contract.findByIdAndDelete(data._id);

        return NextResponse.json({
          success: true,
          message: 'Contract deleted successfully'
        });
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Data are not saved!'
    });
  }
}
