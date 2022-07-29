const router = require("express").Router();
const {userinfo, blockUser, unblockUser}  = require('../controllers/adminController')



// user details for table
router.route("/adminhome").get(userinfo);
// Block and unblock users
router.route("/blockUser/:userId").patch(blockUser)
router.route("/unblockuser/:userId").patch(unblockUser)

module.exports = router;