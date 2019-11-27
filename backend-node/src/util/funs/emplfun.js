const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../../config/data');

Passcrypt = (password) => {
    if (password) {
        return bcrypt.hashSync(password);
    } else {
        return null;
    }
}

const employeefun = {};

employeefun.employee = (req) => {
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        email,
        role,
        phone,
        state,
        availability,
        position,
        nameCompany,
        departament,
        salary,
        points,
        bonus
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        state,
        userName,
        password: Passcrypt(password),
        email,
        role,
        phone,
        availability,
        position,
        departament,
        salary,
        points,
        bonus
    }
}

module.exports = employeefun;