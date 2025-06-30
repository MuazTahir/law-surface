const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({

  owner:{
    ref:"company",
    type:mongoose.SchemaTypes.ObjectId
  },

  autoCreateFolders: {
    folders: [
      {
        id: Number,
        name: String
      }
    ],
    contractFolderName: String,
    poaFolderName: String,
  },
  
  OtherOptions: {
    creditLimit: Number,
    newFileNumber: Boolean,
    enforceCreditLimit: Boolean,
    alertAccountants: Boolean
  }
});

export let FileModel = mongoose.models.files || mongoose.model("files", fileSchema);
                                                                 