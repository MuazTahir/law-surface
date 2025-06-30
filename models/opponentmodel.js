const { default: mongoose } = require('mongoose');

let opponentSchema = mongoose.Schema({
  owner: String,

  case: {
    type: String,
    required: true
  },

  address: String,

  contactNumber: String,

  emailAddress: String,

  legalStatus: String,

  nameEn: String,

  nameAr: String,

  nationality: String
});
export let Opponent = mongoose.models.opponent || mongoose.model('opponent', opponentSchema);
