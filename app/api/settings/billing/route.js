import {  User } from "../../../../models/contract";
import { NextResponse } from "next/server";

import { getDataType } from "@/app/lib/utils";
import CaseValue from "@/models/SystemValue";

export async function POST(request) {
    //   await DbConnect();

    let data = await getDataType();

    const { values, groupTitle } = data.data;

    try {

        switch (true) {

            case data.type == "getSystemValues": {

                const caseValues = await CaseValue.find({});
                return new Response(JSON.stringify({ success: true, data: caseValues }), {
                    status: 200,
                });

            }

            case data.type == "addSystemValue": {

                const caseValue = new CaseValue({ values, groupTitle });
                await caseValue.save();

                return new Response(JSON.stringify({ success: true, data: caseValue }), {
                    status: 201,
                });

            }


   

        }


    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 400 }
        );
    }
}
