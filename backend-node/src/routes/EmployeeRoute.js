const { Router } = require('express');
const router = Router();


const { company } = require('../controller/adminController')


router.get('/v1/api/admin/companys', company)



module.exports = router;  