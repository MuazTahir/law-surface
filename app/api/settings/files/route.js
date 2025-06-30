import { getDataType } from "@/app/lib/utils";
import { FileModel } from "@/models/folderStructure";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {

        let incomingData = await getDataType(req);

        let { data } = incomingData;

        // let data = await req.json();
        // console.log(data);

        switch (true) {

            case incomingData.type == "getFolderStructure":

                // TBC, pass the owner ID in here too 
                const fileData = await FileModel.findOne();
                console.log("Fetched Data:", fileData);

                return NextResponse.json({
                    success: true,
                    fileData
                });

            default:

                if (data._id) {

                    console.log('ID milgyi')

                    await FileModel.findByIdAndUpdate(data._id, {
                        autoCreateFolders: {
                            folders: data.folders,
                            contractFolderName: data.contractFolderName,
                            poaFolderName: data.poaFolderName
                        },
                        OtherOptions: {
                            creditLimit: data.creditLimit,
                            newFileNumber: data.newFileNumber,
                            enforceCreditLimit: data.enforceCreditLimit,
                            alertAccountants: data.alertAccountants
                        }
                    });

                    return NextResponse.json({
                        success: true,
                        data,
                        message: "Success in updating data"
                    });

                } else {

                    let newData = new FileModel({
                        autoCreateFolders: {
                            folders: data.folders,
                            contractFolderName: data.contractFolderName,
                            poaFolderName: data.poaFolderName
                        },
                        OtherOptions: {
                            creditLimit: data.creditLimit,
                            newFileNumber: data.newFileNumber,
                            enforceCreditLimit: data.enforceCreditLimit,
                            alertAccountants: data.alertAccountants
                        }
                    });

                    await newData.save();



                    return NextResponse.json({
                        success: true,
                        data,
                        message: "Success in saving data"
                    });

                }


        }




    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to save data",
            error: error.message
        });
    }
}

// export async function GET(req) {
//     try {
//         const fileData = await FileModel.findOne();
//         console.log("Fetched Data:", fileData);

//         return NextResponse.json({
//             success: true,
//             fileData
//         });
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return NextResponse.json({
//             success: false,
//             message: "Failed to fetch data",
//             error: error.message
//         });
//     }
// }