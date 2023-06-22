const express = require('express');
const userRouter = require('./users');
const router = express.Router();
const status = require('./status');
const apply = require('./patientApply');
const helperApply = require('./helperApply');
const hospital = require('./hospital');

router.use("/user", userRouter);
router.use("/status",status );
router.use('/apply',apply);
router.use("/helper", helperApply);
router.use("/hospital", hospital);

module.exports = router;