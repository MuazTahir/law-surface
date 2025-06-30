import { getDataType, sendSignUpEmail } from '@/app/lib/utils';
import { Company } from '@/models/company';
import { NextResponse } from 'next/server';
import moment from 'moment';
import CaseValue from '@/models/SystemValue';
import { companyController } from '@/controllers/company';
// import { CiBaseball } from "react-icons/ci";

export async function POST(req) {
  try {
    let dataType = await getDataType(req);

    console.log(dataType);

    switch (true) {
      case dataType.type == 'addPaymentInvoice': {
        
      }

      case dataType.type == 'delete_company': {
        console.log('deleting company');

        companyController.dispose(dataType.data._id);

        await Company.findByIdAndDelete(dataType.data._id);
        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'accept_request': {
        console.log('accept request ayi thee');

        let requests = await Company.findByIdAndUpdate(dataType.data._id, {
          approved: true,
          expiry: moment().add(1, 'months')
        });

        sendSignUpEmail();

        // TBC, send email to the receipent

        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'decline_request': {
        console.log('delete request ayi thee');

        let requests = await Company.findByIdAndDelete(dataType.data._id);

        return NextResponse.json({
          success: true
        });
      }

      case dataType.type == 'get-requests-pending': {
        let requests = await Company.find({ approved: false });

        return NextResponse.json({
          success: true,
          requests
        });
      }

      case dataType.type == 'get-requests-approved': {
        let requests = await Company.find({ approved: true });

        return NextResponse.json({
          success: true,
          requests
        });
      }

      default:
        return NextResponse.json({ success: false });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
