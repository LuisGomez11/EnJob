const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
  name: { type: String, },
  lastName: { type: String, },
  userName: { type: String, unique: true },
  password: { type: String, },
  numDocument: { type: String, unique: true },
  nameCompany: { type: String, },
  email: { type: String, unique: true },
  phone: { type: String, },
  role: { type: String, },
  state: { type: String, },
  // photo: { type: String, default: 'https://image.flaticon.com/icons/svg/149/149071.svg'},
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('admines', admineSchema);
