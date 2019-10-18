const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');

const { plantedPassword } = require('../configs/data');

let _id = uuidv1();
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);

 function admine(req) {
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        email
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        idUser: _id,
        state:'inactive',
        userName,
        password: hash,
        email,
        role: 'admine'
    }
}

module.exports = admine;