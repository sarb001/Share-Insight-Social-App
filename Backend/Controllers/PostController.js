const Post = require('../Models/Post');
const  asyncHandler = require('express-async-handler');
const JWT_SECRET = process.env.JWT_SECRET;


const createpost = asyncHandler(async(req,res) => {

    try{
        const {title,body,photo} = req.body;
        if(!title || !body || !photo){
            return res.status(422).json({error : ' Please Add All the Fields '})
        }
        // console.log(' User Requested or Logged User is - ',req.user);

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
        // console.log(error);
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
        // console.log(error);
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
        // console.log(error);
        res.status(422).json(' Something Worng ')
    }
})

const likepost = asyncHandler(async(req,res) => {
            try{
                Post.findByIdAndUpdate(req.body.postId ,{
                    $push : {likes:req.user._id}
                },{
                    new: true
                }).then((res) => {
                    res.json(res)
                }).catch((err) => {
                    return res.status(422).json({error: err})
                })
                
            }catch(error)
            { 
                // console.log('Like Error are--',err);
                res.send({err : ' Like  error occured in '})
            }
})

const unlikepost = asyncHandler(async(req,res) => {
         try{
            Post.findByIdAndUpdate(req.body.postId ,{
                $pull : {likes:req.user._id}
            },{
                new: true
            })
            .then((res) => {
                res.json(res)
            }).catch((err) => {
                return res.status(422).json({error: err})
            })
        }catch(error)
        { 
            // console.log(' UnLike Error are--',err);
            res.send({err : ' UnLike  error occured in '})
        }
})

const comment = asyncHandler(async(req,res) => {

    try{
        const comment = {
            text : req.body.text,
            postedBy: req.user._id
        }

         Post.findByIdAndUpdate(req.body.postId ,{
            $push : {comments:comment}
        },{
            new: true
        })
        .populate("comments.postedBy" ,"_id name")
        .populate("postedBy","_id name")
        .then((res) => {
            res.json(res)
        }).catch((err) => {
            return res.status(422).json({error: err})
        })

    }catch(error)
    { 
        // console.log(' UnLike Error are--',err);
        res.send({err : ' UnLike  error occured in '})
    }
})


const deletepost = asyncHandler(async(req,res) => {

    
    Post.findOne({_id : req.params.postId})
   .populate("postedBy","_id")
   .then((item) => {
            //   console.log(' item is  ',item);
              if(item.postedBy._id.toString() === req.user._id.toString()){
                   item.deleteOne()
                   .then((res) => {
                       res.status(200).json({message : ' Successfully Deleted '})
                    //    console.log('item DDDDDelted')
                  }).catch(err => {
                      console.log(err)
                  })
              }
      })
})


module.exports = {  createpost ,allposts ,mypost , likepost , unlikepost , comment ,deletepost};