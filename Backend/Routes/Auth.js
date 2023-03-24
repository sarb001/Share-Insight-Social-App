const express = require('express');
const { registerUser ,loginUser  } = require('../Controllers/UserController');
const router = express.Router();

const protectedroute = require('../Middleware/RequireLogin');

router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);


module.exports = router;