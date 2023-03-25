const Post = require('../Models/Post');
const  asyncHandler = require('express-async-handler');
const JWT_SECRET = process.env.JWT_SECRET;


const createpost = asyncHandler(async(req,res) => {

    try{
        const {title,body,photo} = req.body;
        if(!title || !body || !photo){
            return res.status(422).json({error : ' Please Add All the Fields '})
        }
        console.log(' User Requested or Logged User is - ',req.user);

        const post = new Post({
            title,
            body,
            photo,
            postedBy : req.user 
        }) 
        post.save().then(result => {
            res.json({post:result})
        })
        .catch(err => {
            console.log(err);
        })
    }catch(error)
    {
        console.log(error);
        res.status(422).json(' Something Worng ')
    }
})


const allposts = asyncHandler(async(req,res) => {
    try{
        Post.find()
        .populate("postedBy","_id name")
        .then(posts => {
            res.json({posts})
        })
        .catch(err => {
            console.log(err)
        })
    }catch(error)
    {
        console.log(error);
        res.status(422).json(' Something Worng ')
    }
})

const mypost = asyncHandler(async(req,res) => {
    try{
        Post.find({postedBy:req.user._id})
        .populate("postedBy","_id name")
        .then(mypost => {
           res.json({mypost})
        })
        .catch(err => {
           console.log(err)
        })
    }catch(error){
        console.log(error);
        res.status(422).json(' Something Worng ')
    }
})

module.exports = {  createpost ,allposts ,mypost };