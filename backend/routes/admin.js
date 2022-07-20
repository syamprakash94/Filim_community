const router = require("express").Router();
const {userinfo}  = require('../controllers/adminController')



// user details for table
router.route("/adminhome").get(userinfo);


module.exports = router;