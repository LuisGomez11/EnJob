const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../config/data');

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);

const employeefun = {};

employeefun.employee = (req) => {
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        nameCompany,
        email,
        phone,
        position,
        departament,
        salary,
        availability,
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        state: 'inactive',
        userName,
        password: hash,
        email,
        role: 'employee',
        phone,
        availability,
        position,
        departament,
        salary,
        points:0
    }
}

module.exports = employeefun;