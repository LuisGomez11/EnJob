'use strict'
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');

const { plantedPassword } = require('../config/data');
const adminE = require('../models/admineModel');

const admineCtrl = {};

userCtrl.CreateUser = async (req, res) => {
    let User = user(req);
    await userModel.findOne({
        $or: [{ email: User.email, userName: User.userName }]
    }, async (err, data) => {
        if (err) res.status(HttpStatus.BAD_REQUEST).send({  });
        if (data != null) return res.status(HttpStatus.BAD_REQUEST).send({ error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST) });
        await userModel.create(User, (err, data) => {
            if (err) return res.status(HttpStatus.BAD_REQUEST).send({ error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST) });

            return res.status(HttpStatus.CREATED).send({ created: HttpStatus.getStatusText(HttpStatus.CREATED) });
        });
    });
};
module.exports = admineCtrl;