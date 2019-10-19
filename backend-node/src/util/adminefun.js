const uuidv1 = require('uuid/v1');
const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../configs/data');

let _id = uuidv1();
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);

const adminefun = {};

 adminefun.admine = (req) => {
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        nameCompany,
        email
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        idamine: _id,
        state:'inactive',
        userName,
        password: hash,
        email,
        role: 'admine'
    }
}

module.exports = adminefun;