const userModel = require('../models/user');
const { employee } = require('../util/funs/emplfun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');


const employeeCtrl = {};


employeeCtrl.createEmployee = async (req, res) => {
    let empl = employee(req);
    await userModel.findOne({
        $or: [{
            userName: empl.userName,
            email: empl.email,
            numDocument: empl.numDocument
        }]
    }, async (err, data) => {
        if (err) res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (data != null) return res.status(bad_requestStatus).send({ error2: bad_requestSend });

        userModel.create(empl, (err, data) => {
            if (err) return res.status(bad_requestStatus).send({ error3: bad_requestSend });

            return res.status(createdStatus).send({ empl, created: createdSend });
        });
    });
}
employeeCtrl.findEmployees = async (req, res) => {
    const employees = await userModel.find();

    return res.status(200).send({ users: employees });
}


module.exports = employeeCtrl;