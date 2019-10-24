const AdmineModel = require('../models/AdmineModel');
const { admine } = require('../util/adminefun');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const employeeCtrl = {};

employeeCtrl.createEmployee(req, res)

module.exports = employeeCtrl;