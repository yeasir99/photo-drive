require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/imagedata', require('./routes/imagedata'));

async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.ATLAS_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log('Mongoose Error', error);
  }
  app.listen(5000);
  console.log('server listning on port 5000');
}

connect();
