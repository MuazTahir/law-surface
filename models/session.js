import mongoose from 'mongoose';

let sessionSchema = mongoose.Schema({
  archived: {
    type: Boolean,
    default: false
  },
  createdBy: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },
  created: Number,
  owner: String,
  sessionType: String,
  firstSession: Boolean,
  sessionDate: Number,
  courseDecision: String,
  selectedSessionFolder: String,

  nextSessionRequests: String,
  nextSessionDate: Number,
  nextSessionTime: String,
  hallNumber: String,
  floor: String,

  addMeeting: Boolean,
  meeting_subject: String,
  meeting_date: Number,
  meeting_time: String,
  meeting_link: String,
  meeting_note: String,
  email_reminder: Boolean,
  whatsapp_reminder: Boolean,
  selected_user: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },

  addReminder: Boolean,
  reminderSubject: String,
  reminderDate: String,
  reminderNote: String,
  emailReminder: Boolean,
  whatsappReminder: Boolean,
  remindUser: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },

  attachments: [],
  case: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  }
});

// let sessionSchema = mongoose.Schema({
//   attachments: [],

//   // expertise session
//   // preparatory session
//   //reconcilagtion session
//   // settlement session
//   firstSession: Boolean,

//   //only for courtSession
//   sessionDate: Number,

//   thisSessionDecision: String,

//   upcomingSession: {
//     nextSessionDate: {
//       date: Number,
//       time: Number
//     },
//     attendanceLocation: {
//       hallNumber: String,
//       floorNumber: String
//     },
//     nextSessionRequests: String
//   },
//   addSession_MeetingLink: {
//     enabled: Boolean,
//     subject: String,
//     meetingTime: {
//       date: Number,
//       time: Number
//     },
//     meetingLink: String,
//     notes: String,
//     email: Boolean,
//     whatsApp: Boolean,
//     remindAlso: {
//       ref: 'user',
//       type: mongoose.SchemaTypes.ObjectId
//     }
//   },
//   addReminder: {
//     enabled: Boolean,
//     reminderDate: Number,
//     reminderNote: String,
//     additionalReminder: String,
//     email: Boolean,
//     whatsApp: Boolean,
//     remindAlso: {
//       ref: 'user',
//       type: mongoose.SchemaTypes.ObjectId
//     },
//     previousSessionDecision: {
//       notesAr: String,
//       notesEn: String
//     },

//     // opens only when sessionType in UI is "courtSession"
//     followDecision: {
//       lastDate: Number,
//       email: Boolean,
//       whatsApp: Boolean,
//       additionalReminder: String,
//       accountantNotice: Boolean
//     },

//     finalSession: Boolean
//   },
//   previousSessionDecision,

//   case: {
//     ref: 'case',
//     type: mongoose.SchemaTypes.ObjectId
//   }
// });

export function getSessionFieldName(field, language) {
  if (field[0] == '-') {
    field = field.slice(1);
  }

  switch (field) {
    case 'Courts':
      return 'case.court.name' + language;

    case 'Session Details':
      return 'nextSessionDate';

    case 'Case No.':
      return 'case.fileNo.name' + language;
  }
}

export let Session = mongoose.models.session || mongoose.model('session', sessionSchema);
