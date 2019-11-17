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
<<<<<<< HEAD


=======
>>>>>>> 18cd6f9edaedaacf244233c80553eb949a38638b
    try {
        const data = await AdmineModel.findOne({
            $or: [{ userName: Admine_2.userName }]
        });
        
        let comp = compare(req.body.password, data.password);
        if (comp == false) return res.status(not_foundStatus).send({ auth });

        const token = createToken(data);
        // quitar la contraseña de la respuesta
        data.password = undefined;
        const dataUser = {
            Admine: data,
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
<<<<<<< HEAD
    AdmineModel.findOne({
        $or: [{ userName: Admine.userName, email: Admine.email, numDocument: Admine.numDocument }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        await AdmineModel.create(Admine, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            //const token = createToken(data);

            return res.status(createdStatus).send({ Admine, created: createdSend });
=======
    try {
        userModel.findOne({
            $or: [{ userName: Admine.userName, email: Admine.email, numDocument: Admine.numDocument }]
        }, async (err, data) => {
            await userModel.create(Admine, (err, data) => {
                if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });
                //const token = createToken(data);
                return res.status(createdStatus).send({ Admine, created: createdSend });
            });
>>>>>>> 18cd6f9edaedaacf244233c80553eb949a38638b
        });
    } catch (err) {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
            if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
    }
};

module.exports = admineCtrl;