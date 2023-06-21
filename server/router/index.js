const express = require('express');
const userRouter = require('./users');
const router = express.Router();
const status = require('./status');
const apply = require('./patientApply');

router.use("/user", userRouter);
router.use("/status",status );
router.use('/apply',apply);

module.exports = router;