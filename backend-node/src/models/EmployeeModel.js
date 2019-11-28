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
    state: { type: String, default: 'Activo' },
    availability: { type: String, default: 'Disponible' },
    position: { type: String },
    departament: { type: String },
    salary: { type: String },
    points: { type: String, default: '0' },
    bonus: { type: String, default: 'No' },
    photo: {type: String , ref: 'photo', default:'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' },
    lastLogin: { type: Date, default: Date.now }
});

module.exports = model('employees', employeeSchema);