const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../../config/data');

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
        email,
        phone
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        state:'inactive',
        userName,
        password: hash,
        email,
        role: 'admine',
        phone
    }
}

module.exports = adminefun;