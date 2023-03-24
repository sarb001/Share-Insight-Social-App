const User = require('../Models/User');
const  asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const registerUser =  asyncHandler(async(req,res) => {
        try
        {
            const { name,email ,password  } = req.body;
            console.log(' data in Backend is - ',name,email,password)
            if(!email || !password || !name ){
                    console.log('Error for data is - ',{email,name,password});
                    return res.status(422).json({error : 'Please FillLLL  all the Fields'})
            }

            const  finduser = await User.findOne({email})
            if(finduser){
                return res.status(422).json({error: ' User Already Present '})
            }
            const salt = await bcrypt.genSalt(10);
            const hashpass = await bcrypt.hash(req.body.password,salt);

            const user = await User.create({
                email :email,
                password : hashpass,
                name :name,
            })

            if(user){
                res.status(201).json({
                    _id : user._id,
                    email : user.email,
                    password: user.password,
                    name :user.name,
                })
            }else
            {
                res.status(400).json({error : ' Not Able to  Create User '})
            }

    }catch(err)
     {
        console.log(err);
        res.status(422).json(' Something  Wrong Happens Signup ')
     }
})


const loginUser =  asyncHandler(async(req,res) => {
     try
     {
        const {email, password} = req.body;

        if(!email || !password){W
            return res.status(422).json({error: " Please Add Email or Password "})
        }
        User.findOne({email:email})
        .then(saveduser => {
                if(!saveduser){
                        return res.status(422).json({error : " Invalid  Email or Password "})
                }
                bcrypt.compare(password,saveduser.password)
                .then(domatch => {
                        if(domatch){
                                // res.json({message : " Successfully Signed In "})
                                const token  = jwt.sign({_id : saveduser._id},JWT_SECRET)
                                res.json({token});
                        }else{
                                return res.status(422).json({error: " Invalid Email or Password "})
                        }
                })
                .catch(err => {
                        console.log(err);
                })
        })
     }catch(err)
     {
        console.log(err);
        res.status(422).json(' Something  Wrong Happens Login ')
     }
})



module.exports = { registerUser ,loginUser } 