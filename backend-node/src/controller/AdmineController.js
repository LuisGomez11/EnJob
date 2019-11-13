'use strict'
const { compare } = require('../util/password');
const { createToken } = require('../util/jwt');
const AdmineModel = require('../models/AdmineModel');
const { admine } = require('../util/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const admineCtrl = { };

admineCtrl.LoginAdmine = async (req, res) => {
    let Admine = admine(req);
    await AdmineModel.findOne({
        $or: [{ userName: Admine.userName }]
    }, async (err, data) => {
        let Admine = admine(req);
        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ error1: not_foundSend });

        let comp = compare(data.password);

        if (comp == false) return res.status(not_foundStatus).send({ error2: not_foundSend });

        const token = createToken(data);

        return res.status(200).send({ user: Admine, auth: true , token });
    });
};

admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);
    AdmineModel.findOne({
        $or: [{ userName: Admine.userName, email: Admine.email, numDocument: Admine.numDocument }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend  });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        await AdmineModel.create(Admine, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            //const token = createToken(data);

            return res.status(createdStatus).send({Admine ,created: createdSend});
        });
    });
};

module.exports = admineCtrl;