const Book = require('../models/book.model');

module.exports.index = async function(req, res) {
  const books = await Book.find({});
  return res.send({
    books
  });
}