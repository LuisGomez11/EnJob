const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  message: { type: String, },
  user: { type: String, unique: true },
  to_user: { type: String, },
});

module.exports = model('admins', adminSchema);
