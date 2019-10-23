const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../config/data');

exports.compare = password => {
    let lo = bcrypt.compareSync(plantedPassword, password)
    if (lo == false) return false;
    return lo;
}


