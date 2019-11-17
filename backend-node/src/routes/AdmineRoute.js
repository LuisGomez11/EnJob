// const { Router } = require('express');
// const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const admineVo = require('../middleware/AdmineCelebrate');
const emplVo = require('../middleware/EmployeeCelebrate');
const { CreateAdmine, LoginAdmine } = require('../controller/AdmineController');
const { createEmployee, findEmployees } = require('../controller/EmployeeController');

module.exports = (app) =>{
  app.post('/v1/api/admine/login', LoginAdmine);

  app.post('/v1/api/admine/create',admineVo, CreateAdmine);
  
  app.post('/v1/api/admine/employee/create', createEmployee);
  
  app.get('/v1/api/admine/employees', findEmployees);
  
  app.get('*', (req, res) => {
      res.status(500).send({ err: 'servido no encontrado' });
    })
}
