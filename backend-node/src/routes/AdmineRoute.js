const { Router } = require('express');
const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const { CreateAdmine, LoginAdmine } = require('../controller/AdmineController');
const { createEmployee } = require('../controller/EmployeeController')
const { company } = require('../controller/adminController')


router.post('/v1/api/admine/login', LoginAdmine);

router.post('/v1/api/admine/create', CreateAdmine);

router.post('/v1/api/admine/employee/create', createEmployee);

router.get('/v1/api/admin/companys', company)



module.exports = router;  