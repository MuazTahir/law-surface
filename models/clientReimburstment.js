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

let clientReimbursementSchema = mongoose.Schema({
  owner: String,
  paymentDate: Number,
  reimbursementStatus: String,
  reimbursementDueDate: Number,
  reimbursementAmount: Number,
  reimbursementPlace: String,
  reimbursementDetails: String,
  files: [],
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  }
});

export function getReimbursementField(field) {
  switch (field) {
    case 'No':
      return 'no';

    case 'Status':
      return 'reimbursementStatus';

    case 'Payment Due Date':
      return 'reimbursementDueDate';

    case 'Payment Date':
      return 'paymentDate';

    case 'Payment Place':
      return 'reimbursementPlace';

    case 'Reimbursement Details':
      return 'reimbursementDetails';

    case 'Reimbursement Amount':
      return 'reimbursementAmount';
  }
}

export let ClientReimbursement =
  mongoose.models.ClientReimbursement || mongoose.model('ClientReimbursement', clientReimbursementSchema);
