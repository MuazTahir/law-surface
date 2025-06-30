let mongoose = require('mongoose');

{
  /* <th>Invoice Code</th>
<th>Invoice Date</th>
<th>File</th>
<th>Case No.</th>
<th>Total Fees</th>
<th>Total VAT</th>
<th>Total Payments</th>
<th>Invoice Total</th> */
}

let clientFeesSchema = mongoose.Schema({
  company: String,
  type: String,
  date: Number,
  feesDetails: String,
  amount: Number,
  totalAmtCalculated: Number,
  client: {
    ref: 'client',
    type: mongoose.SchemaTypes.ObjectId
  },
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  },
  file: {},
  taxPercentage: Number,
  //   TBC notification to be done
  aaplyAccountantDepartment: Boolean,
  caseBalance: {
    type: Number,
    default: 0
  }

  //   Will be calculated on FE
  //   totalPaymens: Number

  //   Will be calculated on FE
  //   invoiceTotal:Number
});

export let ClientFees = mongoose.models.ClientFees || mongoose.model('ClientFees', clientFeesSchema);
