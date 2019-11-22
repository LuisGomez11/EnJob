const emplVo = require('../middleware/EmployeeCelebrate');
const { loginEmployee, findByIdEmployee, findEmployees, createEmployee, updateEmployee} = require('../controller/EmployeeController');

module.exports = (app) =>{
  app.post('/v1/api/employee/login', loginEmployee);

  app.post('/v1/api/employee/create', createEmployee);

  app.put('/v1/api/employee/update/:id', updateEmployee);
  
  app.get('/v1/api/employee/:id', findByIdEmployee);
  
  app.get('/v1/api/employees', findEmployees);

  app.get('*', (req, res) => {
      res.status(500).send({ err: 'servido no encontrado' });
    })
}
