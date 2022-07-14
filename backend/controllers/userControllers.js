const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken=require("../utils/generateToken")

//signup or register user
registerUser = async (req, res) => {
  
  try {
    //generate new password and bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    //create new user
    const newUser = new User({
     username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user and respond
    const user=await newUser.save(); 

    res.status(200).json(user); 
  } catch (err) {
    res.status(500).json(err);
  }
};

//login user
loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json({
      name:user.username,
      email:user.email,
      token:generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json(err);
  }

  // const { email, password } = req.body;
  // const user = await User.findOne({ email });

  // if (user && (await user.matchPassword(password))) {
  //   res.json({
  //     _id: user._id,
  //     username: user.username,
  //     email: user.email,
  //     token: generateToken(user._id),
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid Email or Password!");
  // }
};

//update user
updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.gensalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

// delete user
deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
};

//   get user
getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

//follow a user
followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.body.userId } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you all ready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't follow yourself");
  }
};

//unfollow a user
unfollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.body.userId } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't unfollow yourself");
  }
};

module.exports = {
  updateUser,
  registerUser,
  loginUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
};
