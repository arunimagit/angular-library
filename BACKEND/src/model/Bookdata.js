const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({

    title: String,
    author : String,
    genre :String,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;