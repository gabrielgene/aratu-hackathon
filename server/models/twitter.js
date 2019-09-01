const mongoose = require('mongoose');

const TwitterSchema = mongoose.Schema({
  username: String,
  tweet: String,
  tweet_time: String,
  receive_dm: Boolean,
  email: String,
});

module.exports = mongoose.model('Twitter', TwitterSchema, 'twitter');
