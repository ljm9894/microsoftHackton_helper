const express = require('express');
const status = require('./status');
const router = express.Router();
const { authenticateUser } = require('../../middleware/authenticate');

//router.post("/",authenticateUser,status);

module.exports = router;