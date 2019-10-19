const { Router } = require('express');
const router = Router();

const middle_auth = require('../middlewares/authToken')

const { CreateAdmine,LoginAdmine } = require('../controller/admineController');

router.post('/v1/api/admine/signup', CreateAdmine);

router.post('/v1/api/admine/signin', LoginAdmine);



module.exports = router;  