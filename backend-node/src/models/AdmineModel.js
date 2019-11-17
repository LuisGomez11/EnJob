
const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numDocument: { type: String, required: true, unique: true },
  nameCompany: { type: String, required: true },
  subscriptionTime: { type: Number, required: true },
  email: { type: String, unique: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  state: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('admines', admineSchema);