var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  cellNumber: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
  },

  birthDay: {
    type: Date,
    required: true
  }
})

UserSchema.pre('save', (next) => {
  // Clean date and cell number format
})

module.exports = mongoose.model('users', UserSchema);
