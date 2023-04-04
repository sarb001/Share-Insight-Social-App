const express = require('express');
const { registerUser ,loginUser , resetpass , newpass  } = require('../Controllers/UserController');
const router = express.Router();

const protectedroute = require('../Middleware/RequireLogin');

router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);
router.route('/reset-password').post(resetpass);
router.route('/new-password').post(newpass);


module.exports = router;