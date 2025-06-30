import mongoose from "mongoose";

const valueSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  nameAr: {
    type: String,
    required: true,
  },
});

const groupSchema = new mongoose.Schema({
  values: [valueSchema],
  groupTitle: {
    type: String,
    required: true,
  },
  company:String
});

const CaseValue =
  mongoose.models.CaseValue || mongoose.model("CaseValue", groupSchema);

export default CaseValue;
