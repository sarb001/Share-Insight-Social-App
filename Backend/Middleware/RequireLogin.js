const jwt  = require('jsonwebtoken');
const User = require('../Models/User');
const asyncHandler = require('express-async-handler');
const maintoken = process.env.JWT_SECRET;


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
        const {_id} = payload                        
        User.findById(_id).then(userdata => {       
            req.user = userdata                     
            next()
        })
    })
    
    if(!token){                         
        res.status(401);
        throw new Error(" Not Authorized , No Token ");
    }
})