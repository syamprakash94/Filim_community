const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPost,
  timelineAll,
  profileFeed,
  comm,
  editPost,
} = require("../controllers/postControllers");
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.route("/").post(createPost);
// edit post
router.route("/editpost/:postId").get(editPost);
//update a post
router.route("/updatepost").patch(updatePost);
// comment on a post
router.route("/comment").patch(comm);
//delete a post
router.route("/:id").delete(deletePost);
//like or dislike a post
router.route("/:id/like").put(likeDislikePost);
//get a post
router.route("/:id").get(getPost);
//get timeline posts
router.route("/timeline/:userId").get(timelineAll);
// get users all posts
router.route("/profile/:userId").get(profileFeed);

module.exports = router;
