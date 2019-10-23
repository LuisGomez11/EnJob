'use strict'
const { compare } = require('../util/password');
// const { crateToken } = require('../util/jwt');
const AdmineModel = require('../models/AdmineModel');
const { admine } = require('../util/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const admineCtrl = {};

admineCtrl.LoginAdmine = async (req, res) => {
};

admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);

    AdmineModel.findOne({
        $or: [{ userName: Admine.userName }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend  });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        await AdmineModel.create(Admine, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            return res.status(createdStatus).send({ created: createdSend });
        });
    });
};

module.exports = admineCtrl;