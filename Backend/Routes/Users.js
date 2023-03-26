
const express = require('express');
const router = express.Router();
const protectedroute = require('../Middleware/RequireLogin');
const {getuser , followuser ,unfollowuser} = require('../Controllers/UsersController');

router.route('/user/:id').get(protectedroute,getuser);

router.route('/follow').put(protectedroute,followuser);

router.route('/unfollow').put(protectedroute,unfollowuser);



module.exports = router;