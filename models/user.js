let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  dp: {
    type: String,
    default: '/images/default-profile.png'
  },
  fullName: String,
  password: String,
  officePosition: String,
  contact: String,
  email: String,
  type: String,

  nameEn: String,
  nameAr: String,

  // Accountant, Attorney,
  type: String,
  //

  responsible: String,

  approved: {
    type: Boolean,
    default: 'false'
  },
  company: {
    ref: 'company',
    type: mongoose.SchemaTypes.ObjectId
  },

  lastLogin: Number,

  // customization
  language: {
    type: String,
    default: 'En'
  },
  color: {
    type: String,
    default: '#002d79'
  }
});

export let User = mongoose.models.user || mongoose.model('user', userSchema);
