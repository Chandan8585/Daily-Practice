const express = require("express");
const router = express.Router();

const signUphandler = require("../controllers/signupController");
const LoginHandler  = require("../controllers/loginController");
router.route("/register").post(signUphandler);


router.route("/login").post(LoginHandler)

module.exports = router;


  
   
//Comment