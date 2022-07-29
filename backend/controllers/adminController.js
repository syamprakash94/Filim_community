const User = require("../models/User");



// user details for table
const userinfo = async (req, res) => {
    const user = await User.find();
    try {
      console.log("user",user);   
      res.json(user);
    } catch(error) {
        // console.log(error);
      res.json(error);
    }
  };

  blockUser = async (req, res) => {
    try {
    
      const id=req.params.userId
  console.log("blockid",id);
      const user = await User.findByIdAndUpdate(id,{
        isBlock:true
      },{
        new:true
      });
      res.json(user);

      console.log(user);
    } catch (error) {
  
    }
  }

  unblockUser = async (req, res) => {
    try {
    
      const id=req.params.userId
  console.log("unblockid",id);
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


  module.exports = {
    userinfo,
    blockUser,
    unblockUser
  }