const express = require('express');
const status = require('./status');
const router = express.Router();
const { authenticateUser } = require('../../middleware/authenticate');
const accept = require('./accept');

//outer.post("/",authenticateUser,status);
router.post("/:requestId", authenticateUser, accept);
router.post("/:requestId/progress", authenticateUser, status);



module.exports = router;