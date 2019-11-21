
const admineVo = require('../middleware/AdmineCelebrate');
const emplVo = require('../middleware/EmployeeCelebrate');
const { CreateAdmine, LoginAdmine, findByIdAdmine, findAdmine, updateAdmine } = require('../controller/AdmineController');
const { createEmployee, findEmployees } = require('../controller/EmployeeController');

module.exports = (app) => {
  app.post('/v1/api/admine/login', LoginAdmine);

  app.post('/v1/api/admine/create',  CreateAdmine);

  app.put('/v1/api/admine/update/:id', updateAdmine)

  app.get('/v1/api/admine/:id', findByIdAdmine);

  app.get('/v1/api/admines', findAdmine);

  // app.get('*', (req, res) => {
  //   res.status(500).send({ err: 'servidor no encontrado' });
  // })
}
