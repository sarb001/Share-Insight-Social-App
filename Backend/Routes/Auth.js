const express = require('express');
const { registerUser ,loginUser } = require('../Controllers/UserController');
const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);


module.exports = router;