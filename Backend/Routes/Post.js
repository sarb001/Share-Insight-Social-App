
const express = require('express');
const router = express.Router();
const { createpost  ,allposts ,mypost } = require('../Controllers/PostController');

const protectedroute = require('../Middleware/RequireLogin');

router.route('/createpost').post(protectedroute,createpost);

router.route('/allposts').get(protectedroute,allposts)

router.route('/mypost').get(protectedroute,mypost)

module.exports = router;