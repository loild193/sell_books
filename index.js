const express = require('express');
const app = express();
const port = 9000;

require('dotenv').config()

const cors = require('cors');

const bookRoute = require('./router/book.route');
const authRoute = require('./router/auth.route');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

// allow sharing info between backend and frontend
app.use(cors());

app.use('/', bookRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));