const express = require('express');

const app = express();

app.get('*', async (req, res) => {
  res.send('Work!');
});

module.exports = app;
