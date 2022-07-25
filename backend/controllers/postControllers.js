
const { Promise } = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User"); 

//create a post
createPost = async (req, res) => {
  
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json("err");
  }
};
// edit post
editPost= async (req,res) => {
 
  try {
    const post = await Post.findOne({_id:req.params.postId})
    res.status(200).json(post)
  } catch (err) {
    res.stattus(500).json("err")
  }
}

//update a post
updatePost = async (req, res) => {
  console.log("you");
  const {desc,postId} = req.body
  try {
    const post = await Post.findByIdAndUpdate(postId,{
      desc:desc
    },{
      new:true
    });
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err);
  }
};
// comment on a post
comm = async (req, res) => {
 

  const { ...comment } = req.body;

  console.log("text", comment);
  await Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id username")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

//delete a post
deletePost = async (req, res) => {
  console.log("man");
  try {
    const post = await Post.findById(req.params.id);
   await post.deleteOne()
   res.status(200).json("post deleted")
  } catch (err) {
    res.status(500).json(err);
  }
};

//like or dislike a post
likeDislikePost = async (req, res) => {
  try {
  
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("the post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("the post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//get a post
getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get timeline posts
timelineAll = async (req, res) => {  
  try {
    const currentUser = await User.findById(req.params.userId); 
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    // console.log(,"friendPosts");
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
};

// get users all posts
profileFeed = async (req, res) => {  
  console.log(req.params.userId,"soooo");

  try {
    // const user = await User.findOne({username:req.params.username})
    const posts = await Post.find({userId:req.params.userId})
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  editPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPost,
  timelineAll,
  profileFeed,
  comm
};
