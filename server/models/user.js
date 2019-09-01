const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: String,
  name: String,
  givenName: String,
  familyName: String,
  googleId: String,
  address: Object,
});

module.exports = mongoose.model('User', UserSchema);
