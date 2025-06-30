import mongoose from 'mongoose';

let companyInvoiceSchema = mongoose.Schema({
  owner: String,
  paidBy: String,
  transaction: {
    no: Number,
    date: Number,
    amount: Number,
    service: Number,
    status: String
  }
});

export const CompanyInvoice = mongoose.models.companyInvoice || mongoose.model('companyInvoice', companyInvoiceSchema);
