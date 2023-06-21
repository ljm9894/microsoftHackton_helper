const express = require('express');
const behelper = require('./behelper');
const { authenticateUser } = require('../../middleware/authenticate');
const getUser = require('./getUser');

const router = express.Router();

router.post('/behelper', authenticateUser,behelper);
router.get('/getUser', authenticateUser,getUser );


module.exports = router