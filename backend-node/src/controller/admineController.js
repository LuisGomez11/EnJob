'use strict'
const HttpStatus = require('http-status-codes');

const adminE = require('../models/admineModel');
//const { admine } = require('../util/adminefun');
const { errors, created, bad_request } = require('../util/httpStatus');

const admineCtrl = {};
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');

const { plantedPassword } = require('../configs/data');

let _id = uuidv1();
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);

 function admine(req) {
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        email
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        idUser: _id,
        state:'inactive',
        userName,
        password: hash,
        email,
        role: 'admine'
    }
}
admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);
    await adminE.findOne({
        $or: [{ email: Admine.email, userName: Admine.userName, numDocument: Admine.numDocument }]
    }, async (err, data) => {
        if (err) res.status(bad_request).send({ error1: errors });
        if (data != null) return res.status(bad_request).send({ error2: errors });
        await adminE.create(Admine, (err, data) => {
            if (err) return res.status(bad_request).send({ error3: errors });

            return res.status(bad_request).send({ created: created });
        });
    });
};
module.exports = admineCtrl;