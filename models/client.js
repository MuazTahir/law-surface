const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientCode: Number,
  owner: String,

  createdAt: Date,

  clientNameAr: {
    type: String,
    required: true,
    trim: true
  },
  clientNameEn: {
    type: String,
    required: true,
    trim: true
  },
  legalForm: {
    type: String,
    required: true
  },
  nationality: {
    type: String
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
    // match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  address: {
    type: String,
    trim: true
  },
  idNumber: {
    type: String
  },
  trnNo: {
    type: String
  },
  websiteUrl: {
    type: String
    // match: [/^https?:\/\/[a-zA-Z0-9-._~:\/?#[@]!$&'()*+,;=]+$/, 'is invalid']
  },
  passportNumber: {
    type: String
  },

  personName1: String,
  contactNumber1: String,
  emailAddress1: String,
  preferredLanguage1: String,

  personName2: String,
  contactNumber2: String,
  emailAddress2: String,
  preferredLanguage2: String,

  personName3: String,
  contactNumber3: String,
  emailAddress3: String,
  preferredLanguage3: String
});

export function getFieldName(field) {
  if (field[0] == '-') {
    field = field.slice(1);
  }
  switch (field) {
    // This is an accummulated field
    case 'Total Cases':
      return 'totalCases';

    case 'Address':
      return 'address';

    case 'Client Code':
      return 'clientCode';

    case 'Fees Type':
      return 'type';
    case 'Date':
      return 'date';
    case 'Fees Amount':
      return 'amount';
    case 'VAT':
      return 'taxPercentage';
    case 'Credit':
      return 'credit';
    case 'Debit':
      return 'debit';
    case 'Balance':
      return 'balance';

    case 'Client English Name':
    case 'Client Name(English)':
      return 'clientNameEn';

    case 'Client Arabic Name':
      return 'clientNameAr';

    case 'Legal Form':
    case 'Client Legal Form(English)':
      return 'legalForm';
    case 'Clients Email':
      return 'emailAddress';
    case 'Total Files':
      return 'totalFiles';
    case 'Clients TRN NO.':
      return 'trnNo';
    case 'ID Number':
      return 'clientCode';
    case 'Clients Nationality':
      return 'nationality';
    case 'Credit limit':
      return 'creditLimit';
    case 'Credit balance':
      return 'creditBalance';
    case 'Total Payments':
      return 'totalPayments';
    case 'Total Fees':
      return 'totalFees';
    case 'Balance':
      return 'balance';
    case '':
      return;
  }
}

export let Client = mongoose.models.client || mongoose.model('client', clientSchema);
