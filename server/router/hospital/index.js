const express = require('express');
const recHospital = require('./rechospital');
const { authenticateUser } = require('../../middleware/authenticate');
const router=  express.Router();

router.post("/", authenticateUser,recHospital);
module.exports = router;