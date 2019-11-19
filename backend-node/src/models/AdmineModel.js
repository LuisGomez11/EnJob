
const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
  name: { type: String,  },
  lastName: { type: String,  },
  userName: { type: String,  },
  password: { type: String,  },
  numDocument: { type: String,  },
  nameCompany: { type: String,  },
  subscriptionTime: { type: Number,  },
  email: { type: String },
  phone: { type: String,  },
  role: { type: String,  },
  state: { type: String,  },
  //photo: {type: String , ref: 'photo', default:'https://res.cloudinary.com/divl37evs/image/upload/v1574130941/fyzji3dzlgdl2ffxtfgz.jpg' },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = model('admines', admineSchema);