import mongoose from 'mongoose';

let formSchema = mongoose.Schema({
  owner: String,
  createdBy: String,
  links: [
    {
      title: String,
      link: String
    }
  ]
});

export const LinkManager = mongoose.models.linkManager || mongoose.model('linkManager', formSchema);
