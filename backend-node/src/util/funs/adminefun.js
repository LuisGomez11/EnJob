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
        subscriptionTime,
        initSubscription,
        endSubscription,
        email,
        state,
        phone
    } = req.body
    return {
        name,
        lastName,
        initSubscription,
        endSubscription,
        numDocument,
        subscriptionTime,
        nameCompany,
        state,
        userName,
        password: Passcrypt(password),
        email,
        role: 'Admin RH',
        phone
    }
}

module.exports = adminefun;