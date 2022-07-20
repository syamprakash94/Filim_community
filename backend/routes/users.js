
const router = require("express").Router();
const { updateUser, registerUser, loginUser, deleteUser, getUser, followUser, unfollowUser, getfriends } = require("../controllers/userControllers");



//REGISTER  OR  SIGNUP
router.route("/register").post(registerUser)
//login user
router.route("/login").post(loginUser)
//update user
router.route("/:id").put(updateUser)
//delete user
router.route("/:id").delete(deleteUser)
//get a user
router.route("/:id").get(getUser)
// get Friends
router.route("/friends/:userId").get(getfriends)
//follow a user
router.route("/:id/follow").put(followUser)
//unfollow a user
router.route("/:id/unfollow").put(unfollowUser)




// router.get("/", (req, res) => {
//   res.send("hey its user route");
// });

module.exports = router;
