
const express = require('express');
const router = express.Router();
const protectedroute = require('../Middleware/RequireLogin');
const {getuser} = require('../Controllers/UsersController');

router.route('/user/:id').get(protectedroute,getuser);


module.exports = router;