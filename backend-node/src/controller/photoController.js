const adminModel = require('../models/adminModelzz');
const admineModel = require('../models/AdmineModel')
const { admin } = require('../util/adminfun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const photoCtrl = {};



photoCtrl.uploadPhoto = async (req, res) =>{
    const admind = await admineModel.find();      
    return res.json(admind)
};

module.exports = photoCtrl;