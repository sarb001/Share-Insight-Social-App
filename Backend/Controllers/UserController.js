const User = require('../Models/User');
const  asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const crypto = require('crypto');

const Mailgun = require('mailgun.js');

const   DOMAIN = process.env.MAILGUN_DOMAIN;
const  API_KEY = process.env.MAILGUN_API_KEY;

const formData = require('form-data');
const mailgun = new Mailgun(formData);

const client = mailgun.client({username: "api",key :API_KEY});

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

            const messagedata = {
                from : 'sarbbsandhu555@gmail.com',
                to : user.email,
                subject : "Hello I'min the MainCity ",
                text : "Testing Testng....."
                };

                client.messages.create(DOMAIN,messagedata).then((res) => {
                        console.log(res);
                }).catch((err) => {
                        console.log(err);
                });

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

        if(!email || !password){
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
                                const {_id,email,name,followers,following} = saveduser;
                                res.json({token , user : {_id,email,name,followers,following}});
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


const resetpass =   asyncHandler(async(req,res) => {
        crypto.randomBytes(32,(err,buffer) => {
        if(err){
                console.log(err);
        }
        const token = buffer.toString("hex")
        User.findOne({email : req.body.email})
        .then(user => {
                if(!user){
                        return res.status(422).json({error:" Email Don't exist "})
                }
                user.resetToken = token
                user.expirToken = Date.now() + 3600000
                user.save().then((result) => {

                                 const messagedata = {
                                from : 'sarbbsandhu555@gmail.com',
                                to : user.email,
                                subject : " Password Reset. ",
                                html : `  
                                <p>   Youu request for pass here is 
                                <h1> Click in this <a href = "http://localhost:3000/reset/${token}"> Link </a> to Reset  
                                </h1></p> `
                                };
                
                                client.messages.create(DOMAIN,messagedata).then((res) => {
                                        console.log(res);
                                }).catch((err) => {
                                        console.log(err);
                                });

                })
        })
    })
})


module.exports = { registerUser ,loginUser ,resetpass } 