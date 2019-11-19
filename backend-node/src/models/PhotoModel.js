const { Schema, model } = require('mongoose');

const photoSchema = new Schema({
    photo: { type: String },
    imageURL: { type: String },
    public_id: { type: String },
    id_user: { type: String },
});

module.exports = model('photo', photoSchema );