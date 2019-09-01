const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const connect = require('../utils/db');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.post('*', async (req, res) => {
  await connect();
  console.log('>>>>>>>>>>>>>', req.body);

  const model = new User(req.body);

  model.save().then(data => {
    res.cookie('googleId', req.body.googleId, { maxAge: 9000000000 });
    res.status(200).send(data);
  });
});

module.exports = app;
