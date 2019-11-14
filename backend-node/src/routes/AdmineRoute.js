const { Router } = require('express');
const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const admineVo = require('../middleware/AdmineCelebrate');
const emplVo = require('../middleware/EmployeeCelebrate');
const { CreateAdmine, LoginAdmine } = require('../controller/AdmineController');
const { createEmployee, findEmployees } = require('../controller/EmployeeController');

router.post('/v1/api/admine/login', LoginAdmine);

router.post('/v1/api/admine/create',admineVo, CreateAdmine);

router.post('/v1/api/admine/employee/create', emplVo, createEmployee);

router.get('/v1/api/admine/Employees', findEmployees);

router.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })

module.exports = router;  