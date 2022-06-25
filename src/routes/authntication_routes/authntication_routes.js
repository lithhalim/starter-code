const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../../controllers/authntication-controllers/signin-controllers");
const signup_controllers=require("../../controllers/authntication-controllers/signup-controllers");
const allUser_controllers=require("../../controllers/authntication-controllers/alluser-controllers")
//BASIQ AUTH REQUIRE
const basic_auth=require("../../middelware/authintication/basic_auth")
const bearer_auth=require("../../middelware/authintication/barear_auth")



//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers)
router.get("/allUser",bearer_auth,allUser_controllers)



module.exports=router
