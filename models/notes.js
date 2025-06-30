import mongoose from 'mongoose';

let notesSchema = mongoose.Schema({
  createdDate: Number,
  owner: String,
  notes: String,
  case: String,
  //   case: {
  //     ref: 'case',
  //     type: mongoose.SchemaTypes.ObjectId
  //   },
  user: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  }
});

export const CaseNotes = mongoose.models.caseNotes || mongoose.model('caseNotes', notesSchema);
