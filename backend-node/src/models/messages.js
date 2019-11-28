// const { Schema, model } = require('mongoose');

// const messageSchema = new Schema({
//   emitter: { type: String },
//   receiver: { type: String },
//   text: { type: String },
//   seen: { type: String },
//   created_at: { type: String }
// });

// module.exports = model('messages', messageSchema);
//Imports modules
const Moongoose = require('mongoose');
const schema = Moongoose.Schema;

const Message = new schema({
  message: { type: String, required: true },
  user: { type: schema.Types.ObjectId, ref: 'employees', required: true },
  createAt: { type: Date, default: Date.now },
});

const Conversation = new schema({
  messages: { type: [Message], default: [] },
  members: { type: [{ type: schema.Types.ObjectId, ref: 'employees', required: true }], required: true },
  mreateAt: { type: Date, default: Date.now }
});

exports.Conversation = Moongoose.model('Conversation', Conversation);