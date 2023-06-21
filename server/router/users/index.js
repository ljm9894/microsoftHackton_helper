const express = require('express');
const signup = require('./signup');
const { login, logout } = require('./login');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.delete('/logout',logout);

module.exports = router;