let mongoose = require('mongoose');

let timerSchema = mongoose.Schema({
  createdAt: Number,
  createdBy: {
    ref: 'user',
    type: mongoose.SchemaTypes.ObjectId
  },

  started: {
    type: Boolean,
    default: false
  },
  startTime: Number,
  endTime: Number,
  details: String,
  manualTime: String,
  hideFromReport: {
    type: Boolean,
    default: false
  },
  selectedCase: {
    ref: 'case',
    type: mongoose.SchemaTypes.ObjectId
  }
});

export let WorkTime = mongoose.models.worktime || mongoose.model('worktime', timerSchema);
