'use strict'
const HttpStatus = require('http-status-codes');

const adminE = require('../models/admineModel');
const { admine } = require('../util/adminefun');
const { compare } = require('../util/password');
const { createToken } = require('../util/jwt');
const { bad_requestSend,
    createdSend,
    bad_requestStatus,
    createdStatus,
    not_foundSend,
    not_foundStatus } = require('../util/httpStatus');

const admineCtrl = {};

// Este es el metodo de registro
admineCtrl.CreateAdmine = async (req, res) => {
    let Admine = admine(req);
    //debemos comprobar si los estos datos existen en la DB
    await adminE.findOne({
        //usamos la estructura del OR de mongoose
        $or: [{
            email: Admine.email,
            userName: Admine.userName,
            numDocument: Admine.numDocument,
            nameCompany: Admine.nameCompany
        }]
    }, async (err, data) => {
        console.log(data)
        // aqui retoranremos errores
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        //en caso de encontrar alguno de los datos pues retornara un mensaje de existencia comprobada
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });
        //de lo contrario, se tomaran los valores del usuario y se registraran en la DB
        
        await adminE.create(Admine, (err, data) => {
            //si ocurre algun error lo retornaremos
            console.log(err)
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });
            
            // const token = createToken(data);
            //sino retornaremos un mensaje exitoso
            return res.status(createdStatus).send({ created: createdSend});
        });
    });
};

admineCtrl.LoginAdmine = async (req, res) => {
    let Admine = admine(req);
    await adminE.findOne({
        $or: [{ userName: Admine.userName }]
    }, async (err, data) => {
        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ error1: not_foundSend });

        let comp = compare(data.password);

        if (comp == false) return res.status(not_foundStatus).send({ error2: not_foundSend });

        const token = createToken(data);

        return res.status(200).send({ auth: true , token });
    });
};


module.exports = admineCtrl;