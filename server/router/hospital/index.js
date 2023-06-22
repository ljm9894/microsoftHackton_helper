const express = require('express');
const recHospital = require('./rechospital');
const router=  express.Router();

router.post("/", recHospital);
module.exports = router;