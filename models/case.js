let mongoose = require('mongoose');

let caseSchema = mongoose.Schema({
  relative: [String],

  archived: {
    type: Boolean,
    default: false
  },

  // In the add-procedure modal, if the checkbox "Add to Follow up" is checked
  // This flag will get true
  addToFollowUp: {
    type: Boolean,
    default: false
  },

  name: String,
  teamCapacity: Number,

  caseFileNo: String,

  fileNo: String,
  genFileNo: Number,
  // generates automatically

  caseNo: String,
  caseType: String,
  caseStatus: String,
  claimAmount: String,
  caseStage: String,
  refNo: String,
  department: String,
  governing: String,
  comissioningDate: Date,
  desginatedAttorney: String,
  designatedCounsel: String,

  // yeh company ID h
  owner: String,

  pleadingLawer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  court: String,
  judgeName: String,
  drawnChequeBank: String,

  // email notifications settings
  sendAttorneyEmail: Boolean,
  sendCouncellorEmail: Boolean,
  sendPleadingEmail: Boolean,

  // additional Properties here

  judgeName: String,
  legalReference: String,
  complaintNumber: String,
  chequeNo: String,
  chequeDate: String,
  chequeAmount: String,
  drawnChequeBank: String,
  accountNo: String,
  courtLink: String,
  properyNumber: String,
  properyAddress: String,
  electWaterNo: String,
  unitNo: String,
  createdAt: String,
  responsibleBankEmployee: String,
  documentsReceivedDate: String,
  contractNo: String,
  contractAmount: Number,
  contractPeriod: String,
  paymentStopped: String,
  propertyOwner: String,
  murbahaNumber: String,
  notarizedContractNo: String,
  opponentTradingLicense: String,
  reservationNo: String,
  assignmentDate: String,
  trafficPlateNo: String,
  vehicleType: String,
  manufacturingYear: String,
  placeOfIssue: String,
  paymentOfDate: Date,
  vechileColour: String,
  requestNo: String,
  noticeDate: Date,
  caseDate: Date,
  balance: {
    type: Number,
    default: 0
  },
  clients: [
    {
      adjective: String,
      client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'client'
      }
    }
  ],

  opponents: [
    {
      opponentName: String,
      opponentLegalStatus: String,
      opponentNationality: String,
      opponentContact: String,
      opponentEmail: String,
      opponentAddress: String,
      adjective: String
    }
  ],
  disputes: []
});

export function getCaseFieldName(field, language) {
  if (field[0] === '-') {
    field = field.slice(1);
  }
  switch (field) {
    case 'Case No.':
      return 'fileNo.name' + language;

    case 'File':
      return 'caseStatus.name' + language;

    case 'Client':
      return 'client.clientName' + language;

    case 'Courts':
      return 'court.name' + language;
  }
}

export let Case = mongoose.models.case || mongoose.model('case', caseSchema);
