const router = require("express").Router();
const {userinfo, blockUser, unblockUser, postinfo, deletepost}  = require('../controllers/adminController')



// user details for table
router.route("/adminhome").get(userinfo);
// Block and unblock users
router.route("/blockUser/:userId").patch(blockUser)
router.route("/unblockuser/:userId").patch(unblockUser)
// Post details for table
router.route("/posttable").get(postinfo)
router.route('/getAlluser').get(userinfo)
// delete post
router.route('/deletepost/:postId').delete(deletepost)



module.exports = router;