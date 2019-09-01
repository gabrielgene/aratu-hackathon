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
  User.find({}).count((err, amount) => res.send({ amount }));
});

module.exports = app;
