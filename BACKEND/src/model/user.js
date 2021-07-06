const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Books");

const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email:String,
    password:String
});
//module.exports = mongoose.model('user' , userSchema, 'users');
var Userdata = mongoose.model('user', NewUserSchema);                        

module.exports = UserData;