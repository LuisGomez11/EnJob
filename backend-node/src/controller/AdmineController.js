'use strict'
const { compare } = require('../util/password');
const { createToken } = require('../util/jwt');
const AdmineModel = require('../models/AdmineModel');
// const { admine } = require('../util/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const admineCtrl = { };
const bcrypt = require('bcryptjs');

const { plantedPassword } = require('../config/data');

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(plantedPassword, salt);



 function admine(req){
    let {
        name,
        lastName,
        userName,
        password,
        numDocument,
        nameCompany,
        email,
        phone
    } = req.body
    return {
        name,
        lastName,
        numDocument,
        nameCompany,
        state:'inactive',
        userName,
        password: hash,
        email,
        role: 'admine',
        phone
    }
}

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
        const dataUser = {
            userName: Admine.userName,
            role: Admine.role,
            accessToken: token
          }

        return res.status(200).send({ dataUser});
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