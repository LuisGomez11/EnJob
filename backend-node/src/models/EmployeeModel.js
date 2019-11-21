const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
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
    // photo: {type: String , ref: 'photo', default:'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' },
    lastLogin: { type: Date, default: Date.now }
});

module.exports = model('emplpoyees', employeeSchema);