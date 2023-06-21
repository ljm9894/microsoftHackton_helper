const express =require('express');
const { authenticateUser } = require('../../middleware/authenticate');
const apply = require('./apply');
const router = express.Router();


router.post('/',authenticateUser, apply);

module.exports = router;