const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    photo: { type: String },
    imageURL: { type: String },
    public_id: { type: String },
});

module.exports = model('photo', employeeSchema);