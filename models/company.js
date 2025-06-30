let mongoose = require('mongoose');

let companySchema = mongoose.Schema({

    approved:{
        type:Boolean,
        default:false
    },

    trialStartedOn:Date,
    expiry:Date,
    tradeLicenseNumber:String,
    businessLegalName:String,
    tradeLicenseNumber:String,
    businesssAddress:String,
    businessContactPhone:String,
    officeCapacity:String,
    tax_vat_number:String,
    businessWebsite:String,
    businessEmailAddress:String,

    tradeLicenseCopyPath:String,

    package:{
            ref:"package",
            type:mongoose.SchemaTypes.ObjectId
    },
    users:[
        {
            ref:"user",
            type:mongoose.SchemaTypes.ObjectId
        }
    ]
});

export let Company = mongoose.models.company  || mongoose.model('company', companySchema);

