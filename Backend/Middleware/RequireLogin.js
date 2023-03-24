const jwt  = require('jsonwebtoken');
const User = require('../Models/User');
const asyncHandler = require('express-async-handler');
const maintoken = process.env.JWT_SECRET;

// Used for Token Validation or Token Neeeded 

module.exports = asyncHandler(async (req, res , next) => {

    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error : ' You must be Logged In '})
    }
    const token = authorization.replace("Bearer " ,"")
    jwt.verify(token ,maintoken, (err,payload) => {
        if(err){
            return res.status(401).json({error : ' Wrogn TOken here '})
        }
        const {_id} = payload                        // Able to find id of Logged in user
        User.findById(_id).then(userdata => {       
            req.user = userdata                     // can access whole data if want to of Logged Uder
            next()
        })
    })
    
    if(!token){                          // If Token Doesn't Exist 
        res.status(401);
        throw new Error(" Not Authorized , No Token ");
    }
})