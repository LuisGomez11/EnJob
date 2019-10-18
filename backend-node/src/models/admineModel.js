  
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    idUser: { type: String, required: false, unique: true },
    name: {type: String, required: true},
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    numDocument: { type: String, required: true, unique: true },
    email: { type: String, required: true,unique: true },
    role: { type: String, required: true },
    state:{ type: String, required: true },
    photo: { type: String },
    lastLogin: { type: Date, default: Date.now}
});

module.exports = model('user', userSchema);