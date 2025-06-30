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

let clientInvoiceSchema = mongoose.Schema({
  company: String,
  date: Number,
  client: {
    ref: 'client',
    type: mongoose.SchemaTypes.ObjectId
  },
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  },
  //  This will hold the fees and payments list
  payments: [],
  file: {},
  amount: Number,
  totalVAT: Number

  //   Will be calculated on FE
  //   totalPaymens: Number

  //   Will be calculated on FE
  //   invoiceTotal:Number
});

export let ClientInvoice = mongoose.models.clientInvoice || mongoose.model('clientInvoice', clientInvoiceSchema);
