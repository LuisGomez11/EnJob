const emplModel = require('../models/EmployeeModel');
const { employee } = require('../util/funs/emplfun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const employeeCtrl = {};

employeeCtrl.loginEmployee = async (req, res) => {
    let empl = employee(req);
    await emplModel.findOne({
        $or: [{ userName: empl.userName }]
    }, async (err, data) => {

        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ error1: not_foundSend });

        let comp = compare(data.password);

        if (comp == false) return res.status(not_foundStatus).send({ error2: not_foundSend });

        const token = createToken(data);
        const dataEmployee = {
            userName: empl.userName,
            role: empl.role,
            accessToken: token
        }

        return res.status(200).send({ auth: true, dataEmployee });
    });
};

employeeCtrl.createEmployee = async (req, res) => {
    let empl = employee(req);
    console.log(empl.name)
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
}
employeeCtrl.findEmployees = async (req, res) => {
    const employees = await emplModel.find();

    return res.status(200).send({ users: employees});
}


module.exports = employeeCtrl;