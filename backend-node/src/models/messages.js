const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  emitter: { type: String },
  receiver: { type: String },
  text: { type: String },
  seen: { type: String },
  created_at: { type: String }
});

module.exports = model('messages', messageSchema);
