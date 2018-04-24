const mongoose = require('mongoose');
const Schema = mongoose.Schema; //capital because its a class or constructor

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true}
});

//mongoose, please use 'book'
//mongoose says, I automatically pluralize, you're now using books
//...your welcome!
module.exports = mongoose.model('book', bookSchema);