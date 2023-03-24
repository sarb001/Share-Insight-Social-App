
const express = require('express');
const router = express.Router();
const { createpost } = require('../Controllers/PostController');

const protectedroute = require('../Middleware/RequireLogin');

router.route('/createpost').post(protectedroute,createpost)

module.exports = router;