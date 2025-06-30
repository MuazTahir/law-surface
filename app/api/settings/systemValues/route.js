// import { DbConnect } from "@/app/lib/db";
import { getDataType } from '@/app/lib/utils';
import CaseValue from '@/models/SystemValue';
import mongoose, { Mongoose } from 'mongoose';
import { NextResponse } from 'next/server';

// export async function GET() {
//     //   await DbConnect();

//     try {
//         const caseValues = await CaseValue.find({});
//         return new Response(JSON.stringify({ success: true, data: caseValues }), {
//             status: 200,
//         });
//     } catch (error) {
//         return new Response(
//             JSON.stringify({ success: false, error: error.message }),
//             { status: 400 }
//         );
//     }
// }

function getDummyValues(title) {
  switch (true) {
    case title == 'contractType':
      return [
        {
          nameAr: 'Magement COntract (Ar)',
          nameEn: 'Magement COntract (En)',
          _id: '66cf20033d8e64d91c3d3238'
        },
        {
          nameAr: 'Magement COntract 1(Ar)',
          nameEn: 'Magement COntract 2(En)',
          _id: '66cf20033d8e64d91c3d3248'
        }
      ];

    case title == 'nationality':
      return [
        {
          nameAr: 'paki',
          nameEn: 'paki',
          _id: '66cf20033d8e64d91c3d3218'
        },
        {
          nameAr: 'canadian',
          nameEn: 'canadian',
          _id: '66cf20033d8e64d91c3d3228'
        }
      ];

    case title == 'legalForm':
      return [
        {
          _id: '66cf20033d8e64d91c4d3118',
          nameEn: 'english wala',
          nameAr: 'arabic wala'
        }
      ];
  }
}

export async function POST(req) {
  //   await DbConnect();

  let data = await getDataType(req);

  const { values, groupTitle } = data.data;

  try {
    switch (true) {
      case data.type == 'udateSystemValues': {
        let conf = {};

        if (data.data.preAction == 'add') {
          conf.$push = { values: data.data.values[0] };
        } else if (data.data.preAction == 'delete' || data.data.preAction == 'update') {
          // set the whole array of values in this case
          conf.$set = { values: data.data.values };
        }

        // {
        //   [ data.data.preAction == "add" $push]: { values: data.data.values[0] } // Assuming newValue is the value you want to push
        // }

        let updateValue = await CaseValue.findOneAndUpdate(
          {
            company: data.data.company,
            groupTitle: data.data.groupTitle
          },
          conf,
          { new: true }
        );
        return NextResponse.json({
          success: true,
          updatedCaseValue: updateValue
        });
      }

      case data.type == 'getAllSystemValues': {
      }

      case data.type == 'getValuesByTitle': {
        console.log('request for getValuesByTitle');
        const caseValues = await CaseValue.findOne({ groupTitle: data.data.groupTitle });
        return NextResponse.json({
          success: true,
          values: caseValues?.values
        });
      }

      case data.type == 'getValuesByTitleBulk': {
        console.log('request for getValuesByTitle');
        // TBC compeny remove after token
        const caseValues = await CaseValue.find({
          groupTitle: { $in: data.data.groupTitles || [] },
          company: data.data.company
        });
        return NextResponse.json({
          success: true,
          values: caseValues
        });
      }

      case data.type == 'getSystemValues': {
        const systemValues = await CaseValue.find({
          company: data.data.company
        });

        return NextResponse.json({
          success: true,
          systemValues
        });
        // return new Response(JSON.stringify({ success: true, data: caseValues }), {
        //     status: 200,
        // });
      }

      case data.type == 'addSystemValue': {
        const caseValue = new CaseValue({ values, groupTitle });
        await caseValue.save();

        return new Response(JSON.stringify({ success: true, data: caseValue }), {
          status: 201
        });
      }

      case data.type == 'deleteSystemValue': {
        // TBC yahan deletion wala code add krna h

        return new Response(JSON.stringify({ success: true, data: updatedCaseValue }), { status: 200 });
      }

      case data.type == 'updateSystemValue': {
        const { id, arabic, english } = data;

        const updatedCaseValue = await CaseValue.findOneAndUpdate(
          { 'values._id': id }, // Ensure this targets the specific value
          {
            $set: {
              'values.$.arabic': arabic,
              'values.$.english': english
            }
          },
          {
            new: true
          }
        );

        if (!updatedCaseValue) {
          return new Response(JSON.stringify({ success: false, error: 'Case value not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ success: true, data: updatedCaseValue }), { status: 200 });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

// export async function PUT(request) {
//     //   await DbConnect();
//     const { id, arabic, english } = await request.json();

//     try {
//         const updatedCaseValue = await CaseValue.findOneAndUpdate(
//             { "values._id": id }, // Ensure this targets the specific value
//             {
//                 $set: {
//                     "values.$.arabic": arabic,
//                     "values.$.english": english,
//                 },
//             },
//             {
//                 new: true,
//             }
//         );

//         if (!updatedCaseValue) {
//             return new Response(
//                 JSON.stringify({ success: false, error: "Case value not found" }),
//                 { status: 404 }
//             );
//         }

//         return new Response(
//             JSON.stringify({ success: true, data: updatedCaseValue }),
//             { status: 200 }
//         );
//     } catch (error) {
//         return new Response(
//             JSON.stringify({ success: false, error: error.message }),
//             { status: 400 }
//         );
//     }
// }

// export async function DELETE(request) {
//     //   await DbConnect();
//     const url = new URL(request.url);
//     const groupId = url.searchParams.get("id"); // Extracting Group ID from the URL query parameter

//     if (!groupId) {
//         return new Response(
//             JSON.stringify({ success: false, error: "No ID provided" }),
//             { status: 400 }
//         );
//     }

//     try {
//         const deletedGroup = await CaseValue.findByIdAndDelete(groupId);

//         if (!deletedGroup) {
//             return new Response(
//                 JSON.stringify({ success: false, error: "Group not found" }),
//                 { status: 404 }
//             );
//         }

//         return new Response(JSON.stringify({ success: true }), { status: 200 });
//     } catch (error) {
//         return new Response(
//             JSON.stringify({ success: false, error: error.message }),
//             { status: 400 }
//         );
//     }
// }
