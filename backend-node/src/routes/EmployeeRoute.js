const emplVo = require('../middleware/EmployeeCelebrate');
const { loginEmployee, findByIdEmployee, findEmployees, createEmployee, updateEmployee } = require('../controller/EmployeeController');

const { _Get, _Post, _GetOne, _Delete, _Put } = require('../controller/messagesController');

module.exports = (app) => {
  app.post('/v1/api/employee/login', loginEmployee);

  app.post('/v1/api/employee/create', createEmployee);

  app.put('/v1/api/employee/update/:id', updateEmployee);

  app.get('/v1/api/employee/:id', findByIdEmployee);

  app.get('/v1/api/employees', findEmployees);
  app.get('/v1/api/conversation/', _Get);
  app.get('/v1/api/conversation/:Id', _GetOne);
  app.post('/v1/api/conversation', _Post);
  app.put('/v1/api/conversation/:Id', _Put);
  app.delete('/v1/api/conversation/:Id', _Delete);
  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servidor no encontrado' });
  })
}
