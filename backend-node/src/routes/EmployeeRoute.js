const { Router } = require('express');
const router = Router();


const { loginEmployee } = require('../controller/EmployeeController')


module.exports = (app) =>{
    app.post('/v1/api/employee/login', loginEmployee);
    
    app.get('*', (req, res) => {
        res.status(500).send({ err: 'servido no encontrado' });
      })
  }