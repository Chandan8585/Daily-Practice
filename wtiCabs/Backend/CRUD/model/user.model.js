const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required: true},
    lastName: String,
    email:{type: String, required: true, unique: true},
    mobile: Number,
    project: String
})

const User = mongoose.model('user', userSchema)
module.exports = User;
