const { default: mongoose } = require('mongoose');

const contractSchema = mongoose.Schema({
  agreedAmoun: Number,
  client: {
    ref: 'client',
    type: mongoose.SchemaTypes.ObjectId
  },
  contractNo: Number,
  contractType: String,

  expiryDate: Date,

  notes: String,

  startDate: Date,

  // cintract pictures in here
  attachments: []
});

export const getFieldName = (fieldName, language) => {
  if (fieldName[0] == '-') {
    fieldName = fieldName.slice(1);
  }

  switch (fieldName) {
    case 'Contract No.':
      return 'contractNo';

    case 'Start Date':
      return 'startDate';

    case 'Expiry Date':
      return 'expiryDate';

    case 'Notes':
      return 'notes';

    case 'Client Name':
      return 'client.clientName' + language;

    case 'Contract Type':
      return 'contractType.values.name' + language;
  }
};

export const Contract = mongoose.models.contract || mongoose.model('contract', contractSchema);
