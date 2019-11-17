const emplModel = require('../models/EmployeeModel');
const { employee } = require('../util/funs/emplfun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');
const { compare } = require('../util/password');
const { createTokenE } = require('../util/jwt');

const employeeCtrl = {};

employeeCtrl.loginEmployee = async (req, res) => {
    let Emplo_2 = employee(req);
    const auth = false;

    try {
        const data = await emplModel.findOne({
            $or: [{ userName: Emplo_2.userName }]
        });

        let comp = compare(req.body.password, data.password);
        if (comp == false) return res.status(not_foundStatus).send({ auth });

        const token = createTokenE(data);
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
    // let Admine = admine(req);
};

employeeCtrl.createEmployee = async (req, res) => {
    let empl = employee(req);
    await emplModel.findOne({
        $or: [{
            userName: empl.userName,
            email: empl.email,
            numDocument: empl.numDocument
        }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });

        emplModel.create(empl, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            return res.status(createdStatus).send({ empl, created: createdSend });
        });
    });
};

employeeCtrl.findEmployees = async (req, res) => {
    try {
        const employees = await emplModel.find();

        return res.status(200).send({ users: employees });
    } catch (error) {
        return res.status(404).send({ err });
    }
};

employeeCtrl.findByIdEmployee = async (req, res) => {
    try {
        const employee = await emplModel.findById(req.params.id);
        return res.status(200).send({ users: employee });
    } catch (error) {
        return res.status(404).send({ err });
    }
};

module.exports = employeeCtrl;