let mongoose = require('mongoose');

let clientPaymentSchema = mongoose.Schema({
  company: String,
  date: Number,
  paymentNote: String,
  amount: Number,
  type: String,
  attachements: [],
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  },
  caseBalance: {
    type: Number,
    default: 0
  }
});

export let ClientPayment = mongoose.models.clientPayment || mongoose.model('clientPayment', clientPaymentSchema);
