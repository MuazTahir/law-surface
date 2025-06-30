const mongoose = require('mongoose');

// Log schema
const logSchema =  mongoose.Schema({
  user: String,
  case:{
    ref:"case",
    type:mongoose.SchemaTypes.ObjectId
},
  time: Date,
  log: {
    icon:String,
    title:String
  }
});

// User schema
// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true }
// });

// Create models
export const Log = mongoose.models.log || mongoose.model("log", logSchema);

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export { User, Log };
