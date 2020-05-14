const express = require('express');
const app = express();
const port = 9000;

const cors = require('cors');

const userRoute = require('./router/user.route');
const authRoute = require('./router/auth.route');

const mongoose = require('mongoose');
mongoose.connect('MONGO_URL=mongodb://localhost/books', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

// allow sharing info between back and frontend
app.use(cors());

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));