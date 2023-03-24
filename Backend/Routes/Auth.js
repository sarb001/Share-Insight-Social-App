const express = require('express');
const { registerUser } = require('../Controllers/UserController');
const router = express.Router();

router.route('/signup').get(registerUser);


module.exports = router;