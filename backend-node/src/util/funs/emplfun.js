const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../../config/data');

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
        nameCompany:'Condor Labs',
        state: 'Activo',
        userName,
        password: hash,
        email,
        role: 'Empleado',
        phone,
        availability: 'Disponible',
        position,
        departament,
        salary,
        points: '0'
    }
}

module.exports = employeefun;