const express = require('express');
const app = express();
const port = 9000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true, useUnifiedTopology: true });

const Book = require('./models/book.model');

Book.find().then((book) => console.log(book));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));