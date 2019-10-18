const { Router } = require('express');
const router = Router();

const { CreateAdmine } = require('../controller/admineController');

router.post('/v1/api/create', CreateAdmine);



module.exports = router;  