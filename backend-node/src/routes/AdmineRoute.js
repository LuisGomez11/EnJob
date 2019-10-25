const { Router } = require('express');
const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const { CreateAdmine,LoginAdmine } = require('../controller/AdmineController');
const {createEmployee} = require('../controller/EmployeeController')


router.post('/v1/api/admine/login', LoginAdmine);

router.post('/v1/api/admine/create', CreateAdmine);

router.post('/v1/api/employee/create', createEmployee);

router.post('/v1/api/employee/create', );



module.exports = router;  