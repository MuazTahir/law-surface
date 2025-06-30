import mongoose from "mongoose";

let formSchema = mongoose.Schema({
  action:String,
  content:String,
  formLanguage:String,
  formNameAr:String,
  formNameEn:String,
  fieldArray:[]
})

const newForm = mongoose.models.newForm || mongoose.model("newForm", formSchema);

export default newForm;
