const jwt = require('jsonwebtoken');

const { jwt_key } = require('../config/data');
const { non_authoritative_informationSend, non_authoritative_informationStatus } = require('../util/httpStatus');
const adminE = require('../models/admineModel');
userModel

exports.validateToken = (req, res, next) => {
    if (req.path != '/v1/api/admine/signin') {
        if (!req.headers.authorization) return res.status(non_authoritative_informationStatus).send({ error: non_authoritative_informationSend });
        const token = req.headers.authorization.replace(/['"]+/g, '');

        try {
            let verifiedToken = jwt.verify(token, jwt_key, function (err, decoded) {
                console.log(decoded.foo) // bar
            });
            if (verifiedToken.exp <= moment().unix()) {
                return res.status(401).send({ error: 'invalid token' })
            };
        } catch (error) {
            return res.status(404).send({ error: 'token not found' })
        }
        req.user = verifiedToken;

        dbUser.findOne(
            { _id: req.user.sub }
            , (err, data) => {
              if (err) return res.status(500).send({ error: 'internal error' });
        
              if (data != null) {
                next();
              } else {
                return res.status(500).send({ error: 'internal error' });
              }
        
            });
    } else next();
};