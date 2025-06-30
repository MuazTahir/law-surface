import { getDataType } from "@/app/lib/utils";
import { Case } from "@/models/case";
import { Log } from "@/models/log"; // Adjust the import path if necessary
// import dbConnect from "@/app/lib/db";

// GET /api/logs
export async function POST(req, res) {
    console.log("GET request received");
    try {

        let data = await getDataType(req);

        switch (true) {

            case data.type == "getLogs":
            
            // TBC, the company ID should be passed here
            const logs = await Log.find().populate('case').exec();
                console.log("Logs fetched:", logs);

                return Response.json({
                    logs,
                    success: true
                });

        }

    } catch (error) {
        console.log(error);
        return Response.json({
            success: false
        });
    }
}
