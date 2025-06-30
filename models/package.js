let mongoose = require('mongoose');

let packageSchema = mongoose.Schema({
    name:String,
    teamCapacity:Number
});

export let Package = mongoose.models.package  || mongoose.model('package', packageSchema);

