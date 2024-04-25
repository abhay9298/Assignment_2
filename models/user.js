const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  comment: String
});

module.exports = mongoose.model('User', userSchema);