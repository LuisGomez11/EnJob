const bcrypt = require('bcryptjs');

exports.compare = (body , password) => {
    let lo = bcrypt.compareSync(body, password)
    if (lo == false) return false;
    return true;
}


