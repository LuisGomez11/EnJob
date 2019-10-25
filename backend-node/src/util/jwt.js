const jwt = require('jsonwebtoken');
const { jwt_key } = require('../config/data');

exports.createToken = Admine => {
    const payload = {
        userName: Admine.userName,
        role: Admine.role,
    }
    return jwt.sign({
        payload,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, jwt_key);
};