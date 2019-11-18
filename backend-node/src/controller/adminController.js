const adminModel = require('../models/adminModelzz');
const admineModel = require('../models/AdmineModel')
const { admin } = require('../util/adminfun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const adminCtrl = {};

adminCtrl.loginadmin = async (req, res) => {
    let Admin = admin(req);
    await adminModel.findOne({
        $or: [{ userName: Admin.userName }]
    }, async (err, data) => {

        if (err) return res.status(bad_requestStatus).send({ error1: bad_requestSend });
        if (!data) return res.status(not_foundStatus).send({ error1: not_foundSend });

        let comp = compare(data.password);

        if (comp == false) return res.status(not_foundStatus).send({ error2: not_foundSend });

        const token = createToken(data);
        const dataadmin = {
            userName: Admine.userName,
            accessToken: token
        }

        return res.status(200).send({ auth: true, dataadmin });
    });
};

adminCtrl.company = async (req, res) => {
    const admind = await admineModel.find();
    return res.json(admind)
};

module.exports = adminCtrl;