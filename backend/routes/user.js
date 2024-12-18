const express = require("express");
const {SignUp, login} = require("../controller/user");
// const authCheck = require("../middleware/authMiddleware")


const router = express.Router();

router.post("/signUp",SignUp);
router.post("/login", login);

// router.post("/",authCheck)


module.exports = router;

