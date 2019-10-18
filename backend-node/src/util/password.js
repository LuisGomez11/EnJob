const bcrypt = require('bcrypt');

const {plantedPassword} = require('../configs/data');

exports.compare = password => {
    let lo = bcrypt.compareSync(plantedPassword, password)
    if(lo == false) return false;
    return lo;
}
