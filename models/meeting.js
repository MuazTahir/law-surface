import mongoose from 'mongoose';

const meetingFormSchema = mongoose.Schema({
  createdBy: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },
  duration: String,
  meetingStartedAt: {
    type: Number,
    default: 0
  },
  meetingStarted: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: Number,
  subject: String,
  meetingDate: Date,
  meetingLink: String,
  meetingStart: Number,
  meetingEnd: Number,
  meetingNotes: String,
  meetingEmail: Boolean,
  meetingWhatsApp: Boolean,
  attachments: {
    caseId: String
  },
  owner: {
    ref: 'company',
    type: mongoose.SchemaTypes.ObjectId
  },
  user: [String]
});

export const Meeting = mongoose.models.meeting || mongoose.model('meeting', meetingFormSchema);
