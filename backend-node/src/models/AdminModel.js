const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  name: { type: String, },
  userName: { type: String, unique: true },
  password: { type: String, },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('admins', adminSchema);