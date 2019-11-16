'use strict'
const { compare } = require('../util/password');
const { createToken } = require('../util/jwt');
const userModel = require('../models/user');
const { admine } = require('../util/funs/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const admineCtrl = {};

admineCtrl.LoginAdmine = async (req, res) => {
    let Admine = admine(req);
    const auth = false;
    await userModel.findOne({
        $or: [{ userName: Admine.userName }]
    }, async (err, data) => {
        let Admine = admine(req);
        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ auth });

        let comp = compare(req.body.password, data.password);
        
        if (comp == false) return res.status(not_foundStatus).send({ auth });

        const token = createToken(data);
        const dataUser = {
            userName: Admine.userName,
            role: Admine.role,
            accessToken: token
        }

        return res.status(200).send({ dataUser });
    });
};

admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);
    userModel.findOne({
        $or: [{ userName: Admine.userName, email: Admine.email, numDocument: Admine.numDocument }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        await userModel.create(Admine, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            //const token = createToken(data);

            return res.status(createdStatus).send({ Admine, created: createdSend });
        });
    });
};

module.exports = admineCtrl;