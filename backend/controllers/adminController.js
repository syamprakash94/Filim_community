const User = require("../models/User");
const Post = require("../models/Post");



// user details for table
const userinfo = async (req, res) => {
  // console.log("syam");
    const user = await User.find();
    try {
        
      res.json(user);
    } catch(error) {
        // console.log(error);
      res.json(error);
    }
  };
// block  user
  blockUser = async (req, res) => {
    try {  
      const id=req.params.userId
  // console.log("blockid",id);
      const user = await User.findByIdAndUpdate(id,{
        isBlock:true
      },{
        new:true
      });
      res.json(user);
    
    } catch (error) { 
    }
  }
//  unblock user
  unblockUser = async (req, res) => {
    try {   
      const id=req.params.userId
  // console.log("unblockid",id);
      const user = await User.findByIdAndUpdate(id,{
        isBlock:false
      },{
        new:true
      });
      res.json(user);

      console.log(user);
    } catch (error) { 
    }
  }
// Post details for table
const postinfo = async (req, res) => {
  const post = await Post.find();
 
  try {
    // console.log("post",post);   
    res.json(post);
  } catch(error) {
      // console.log(error);
    res.json(error);
  }
};
// delete post
 deletepost = async (req,res) =>{
  // console.log(req.params.postId,"love");
  try {
    
    const post = await Post.findById(req.params.postId);
    await post.remove();
    res.json({});
  } catch (error) {
    res.json(error);
  }
}

  module.exports = {
    deletepost,
    postinfo,
    userinfo,
    blockUser,
    unblockUser
  }