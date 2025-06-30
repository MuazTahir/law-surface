let mongoose = require('mongoose');

let procedureSchema = mongoose.Schema({
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  },
  createdBy: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },
  createdDate: Number,
  reminderDate: Number,
  addToFollowUp: Boolean,
  owner: String,
  procedures_date: Number,
  procedures_type: String,
  procedures_status: String,
  // procedures_details_arabic: String,
  // procedures_details_english: String,
  procedures_detailsAr: String,
  procedures_detailsEn: String,
  procedures_date: String,
  emailReminder: Boolean,
  whatsAppReminder: Boolean,
  showToAllUsers: Boolean,
  attachedFiles: []
});

export let Procedure = mongoose.models.procedure || mongoose.model('procedure', procedureSchema);
