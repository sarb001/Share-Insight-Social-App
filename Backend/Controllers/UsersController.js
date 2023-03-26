
const asyncHandler = require('express-async-handler');
const Post = require('../Models/Post');
const User = require('../Models/User');


const getuser   = asyncHandler(async(req,res) => {
    try
    {
          await  User.findOne({_id:req.params.id})
          .select("-password")
          .then(item => {
             Post.find({postedBy:req.params.id})
             .populate("postedBy","_id name")
             .then((posts) => {
                    res.status(200).json({item,posts})
                    console.log(' Res & Posts arrre - ',{item,posts})
             }).catch(err => {
                console.log(err);
             })
         })
    }catch(err)
    {
        console.log(err)
    }
})

module.exports = { getuser }