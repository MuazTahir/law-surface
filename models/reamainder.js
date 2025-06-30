import mongoose from 'mongoose';

const remainderFormSchema = mongoose.Schema({
  subject: String,

  createdDate: Number,

  // TBC, it should be shown only to the who created it
  createdBy: String,

  reminderDate: Date,
  reminderNote: String,
  reminderSchedule: String,
  reminderEmail: String,
  reminderWhatsApp: Boolean,
  case: String,
  attachments: {
    caseId: String
  },
  owner: String
});

export const Remainder = mongoose.models.reminder || mongoose.model('reminder', remainderFormSchema);
