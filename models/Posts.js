const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:String,
    gender: String,
    IP : String,
    age: Number
})

var User = mongoose.model('User',userSchema,'users')

module.exports = User;
