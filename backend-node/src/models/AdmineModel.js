const { Schema, model } = require('mongoose');

const admineSchema = new Schema({
<<<<<<< HEAD
<<<<<<< HEAD
  name: { type: String, },
  lastName: { type: String, },
  userName: { type: String, unique: true },
  password: { type: String, },
  numDocument: { type: String, unique: true },
  nameCompany: { type: String, },
  email: { type: String, unique: true },
  phone: { type: String, },
  role: { type: String, },
  state: { type: String, },
  // photo: { type: String, default: 'https://image.flaticon.com/icons/svg/149/149071.svg'},
  lastLogin: { type: Date, default: Date.now }
=======
=======
>>>>>>> parent of 3715302... login
    name: {type: String, },
    lastName: { type: String,  },
    userName: { type: String, },
    password: { type: String,  },
    numDocument: { type: String, },
    nameCompany: { type: String, },
    email: { type: String,},
    phone: { type: String,  },
    role: { type: String,  },
    state:{ type: String,  },
  //  photo: { type: String },
    lastLogin: { type: Date, default: Date.now}
<<<<<<< HEAD
>>>>>>> parent of 3715302... login
=======
>>>>>>> parent of 3715302... login
});

module.exports = model('admines', admineSchema);
