let mongoose = require('mongoose');

let updatesSchema = mongoose.Schema({
  createdAt: Number,
  createdBy: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },
  updateDate: Number,
  updateNotesEn: String,
  updateNotesAr: String,
  attachments: [],
  case: {
    ref: 'update',
    type: mongoose.SchemaTypes.ObjectId
  }
});

export let CaseUpdate = mongoose.models.caseUpdate || mongoose.model('caseUpdate', updatesSchema);
