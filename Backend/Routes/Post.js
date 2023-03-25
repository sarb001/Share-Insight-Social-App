
const express = require('express');
const router = express.Router();
const { createpost  ,allposts } = require('../Controllers/PostController');

const protectedroute = require('../Middleware/RequireLogin');

router.route('/createpost').post(protectedroute,createpost);

router.route('/allposts').get(protectedroute,allposts)

module.exports = router;