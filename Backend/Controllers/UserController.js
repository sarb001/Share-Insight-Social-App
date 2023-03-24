const User = require('../Models/User');
const  asyncHandler = require('express-async-handler');


const registerUser =  asyncHandler(async(req,res) => {
        res.send('Int he......');
})

module.exports = { registerUser } 