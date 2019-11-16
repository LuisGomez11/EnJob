  
const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
  name: { type: String, },
  lastName: { type: String, },
  userName: { type: String, },
  password: { type: String, },
  numDocument: { type: String, },
  nameCompany: { type: String, },
  email: { type: String, },
  phone: { type: String, },
  role: { type: String, },
  state: { type: String, },
  availability: { type: String },
  position: { type: String },
  departament: { type: String },
  salary: { type: String },
  points: { type: String },
  photo:{ type: String },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('users', admineSchema);