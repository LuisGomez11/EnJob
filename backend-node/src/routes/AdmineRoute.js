const { Router } = require('express');
const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const { CreateAdmine } = require('../controller/AdmineController');


// router.post('/v1/api/login', userCtrl.loginUser);

router.post('/v1/api/create', CreateAdmine);



module.exports = router;  