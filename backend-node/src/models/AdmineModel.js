
const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  userName: { type: String  },
  password: { type: String },
  numDocument: { type: String },
  nameCompany: { type: String },
  subscriptionTime: { type: String },
  initSubscription: { type: String },
  endSubscription: { type: String },
  email: { type: String },
  phone: { type: String,  },
  role: { type: String,  },
  state: { type: String,  },
  photo: {type: String ,  default:'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('admines', admineSchema);