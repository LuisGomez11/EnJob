'use strict'
const { compare } = require('../util/password');
const { createToken } = require('../util/jwt');
const AdmineModel = require('../models/AdmineModel');
const { admine } = require('../util/funs/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const admineCtrl = {};

admineCtrl.LoginAdmine = async (req, res) => {
    let Admine_2 = admine(req);
    const auth = false;


    try {
        const data = await AdmineModel.findOne({
            $or: [{ userName: Admine_2.userName }]
        });

        let comp = compare(req.body.password, data.password);
        if (comp == false) return res.status(not_foundStatus).send({ auth });
        // if (data.state === 'Inactivo') return res.status(non_authoritative_informationStatus).send({ error: non_authoritative_informationSend });
        const token = createToken(data);
        // quitar la contraseña de la respuesta
        data.password = undefined;
        const dataUser = {
            Data: data,
            accessToken: token
        }

        return res.status(200).send({ dataUser });

    } catch (err) {
        console.warn(err)
        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ auth });

    }
};

admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);
    AdmineModel.findOne({
        $or: [{ userName: Admine.userName, email: Admine.email, numDocument: Admine.numDocument }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        await AdmineModel.create(Admine, (err, data) => {
            console.log(err)
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });
            

            //const token = createToken(data);

            return res.status(createdStatus).send({ Admine, created: createdSend });
        });
    });
};

admineCtrl.findByIdAdmine = async (req, res) => {
    try {
        const Adminee = await AdmineModel.findById(req.params.id);
        return res.status(200).send({ Adminee });
    } catch (error) {
        return res.status(404).send({ err });
    }
};

admineCtrl.findAdmine = async (req, res) => {
    try {
        const admines = await AdmineModel.find();

        return res.status(200).send({ users: admines });
    } catch (err) {
        return res.status(404).send({ err });
    }
};

admineCtrl.updateAdmine = async (req, res) => {
    console.log('sdfsdfs')
    try {
        console.log('sdf')
        console.log(req.params.id)
        let Admine = admine(req);
        await AdmineModel.findByIdAndUpdate(req.params.id, { $set: Admine }, { new: true });

        return res.status(200).send({ users:'ads'});
    } catch (err) {
        return res.status(404).send({ err });
    }
};

module.exports = admineCtrl;