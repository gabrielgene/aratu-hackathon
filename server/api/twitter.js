const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Twitter = require('../models/twitter');
const connect = require('../utils/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('*', async (_, res) => {
  await connect();
  Twitter.find({}).count((err, amount) => res.send({ amount }));
});

module.exports = app;
