
import mongoose from "mongoose"

const counselingDetailSchema=mongoose.Schema({
        fileAttachment:String,
        caseFacts:String,
        conseling:String,

        clientSelect: String,
        clientNameAerobic: String,
        clientNameEnglish: String,
        emailAddress:String,
        legalForm: String,
        address:String,
        consultationTitle: String,
        consultingType: String,
        consultingPeriod: String,
        consultationDate: Date,
        consultingMethod: String,
        counsel: String,
        consultationTime: String,
        phoneNumber: Number
    
})

export const Consultation =mongoose.models.counsels || mongoose.model("counsels",counselingDetailSchema)