const { Router } = require('express');
const router = Router();

const { CreateAdmine,LoginAdmine } = require('../controller/admineController');

router.post('/v1/api/admine/signup', CreateAdmine);

router.post('/v1/api/admine/signin', LoginAdmine);



module.exports = router;  