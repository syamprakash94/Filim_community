const User = require("../models/User");



// user details for table
const userinfo = async (req, res) => {
    const user = await User.find();
    try {
      console.log("user",user);   
      res.json(user);
    } catch(error) {
        console.log(error);
      res.json(error);
    }
  };


  module.exports = {
    userinfo
  }