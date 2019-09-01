const express = require('express');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const connect = require('../utils/db');

const app = express();
app.use(cookieParser());

app.post('*', async (req, res) => {
  await connect();

  const model = new User(req.body);

  model.save().then(data => {
    res.cookie('googleId', req.body.googleId, { maxAge: 9000000000 });
    res.send(data);
  });
});

module.exports = app;
