const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String
});

const Book = mongoose.model('Book', bookSchema, 'book');

module.exports = Book;