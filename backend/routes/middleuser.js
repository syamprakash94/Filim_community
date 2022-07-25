const router = require("express").Router();

const { regmiddleuser } = require("../controllers/middleuserControllers")

// register middle user
router.route("/registermiddleuser").post(regmiddleuser)

module.exports = router