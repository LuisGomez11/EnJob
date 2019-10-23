const { Router } = require('express');
const router = Router();

// const  { validateToken } = require('../middlewares/authToken');
const { CreateAdmine,LoginAdmine } = require('../controller/AdmineController');


router.post('/v1/api/login', LoginAdmine);

router.post('/v1/api/create', CreateAdmine);



module.exports = router;  