const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../../config/data');

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);

const employeefun = {};

employeefun.employee = (req) => {
    let {
        name,
        userName,
        password,
    } = req.body
    return {
        name,
        userName,
        password: hash
    }
}

module.exports = employeefun;