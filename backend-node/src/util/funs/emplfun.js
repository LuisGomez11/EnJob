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
        position,
        nameCompany,
        departament,
        salary,
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        state: 'Activo',
        userName,
        password: Passcrypt(password),
        email,
        role,
        phone,
        availability: 'Disponible',
        position,
        departament,
        salary,
        points: '0'
    }
}

module.exports = employeefun;