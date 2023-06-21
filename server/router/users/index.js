const express = require('express');
const signup = require('./signup');
const { login, logout } = require('./login');
const refreshToken = require('./refreshToken');
const main = require('./main');
const { authenticateUser } = require('../../middleware/authenticate');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/refreshToken', refreshToken);
router.delete('/logout',logout);
router.get('/main', authenticateUser,main);
module.exports = router; 