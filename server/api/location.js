const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/user');
const connect = require('../utils/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('*', async (_, res) => {
  await connect();
  User.find({}, (err, users) => res.send({ users }));
});

module.exports = app;
