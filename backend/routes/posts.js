const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPost,
  timelineAll,
  profileFeed,
} = require("../controllers/postControllers");
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.route("/").post(createPost);
//update a post
router.route("/:id").put(updatePost);
//delete a post
router.route("/:id").delete(deletePost);
//like or dislike a post
router.route("/:id/like").put(likeDislikePost);
//get a post
router.route("/:id").get(getPost);
//get timeline posts
router.route("/timeline/:userId").get(timelineAll);
// get users all posts
router.route("/profile/:username").get(profileFeed);

module.exports = router;
