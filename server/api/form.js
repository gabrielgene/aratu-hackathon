const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const Twitter = require('../models/twitter');
const connect = require('../utils/db');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.post('*', async (req, res) => {
  await connect();

  if (req.body.twId) {
    const { email } = req.body;
    await Twitter.findByIdAndUpdate(req.body.twId, { email });
  }
  const model = new User(req.body);

  model.save().then(data => {
    res.cookie('googleId', req.body.googleId, { maxAge: 9000000000 });
    res.status(200).send(data);
  });
});

app.get('*', async (_, res) => {
  await connect();
  User.find({}).then(users => {
    res.send(users);
  });
});

module.exports = app;
