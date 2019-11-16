const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../../config/data');


Passcrypt = (password) => {
    if (password) {
        return bcrypt.hashSync(password);
    } else {
        return null;
    }
}

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
        phone,
        position,
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
        role: 'admine',
        phone,
        availability: 'Disponible',
        position,
        departament,
        salary,
        points: '0'
    }
}

module.exports = adminefun;