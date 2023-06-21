const express = require('express');
const userRouter = require('./users');
const router = express.Router();
const status = require('./status');
const apply = require('./patientApply');
const helperApply = require('./helperApply');

router.use("/user", userRouter);
router.use("/status",status );
router.use('/apply',apply);
router.use("/helper", helperApply);
module.exports = router;