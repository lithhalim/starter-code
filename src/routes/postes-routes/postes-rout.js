const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE
const create_postes_controlles=require("../../controllers/postes-controlles/create-postes-controllers");
const get_all_postes_controllers=require("../../controllers/postes-controlles/getall-postes-controllers");
const post_comment_controllers=require("../../controllers/postes-controlles/post-comment-controlles")
const post_image_controllers=require("../../controllers/postes-controlles/post-image-controlles")

//barear AUTH REQUIRE
const bearer_auth=require("../../middelware/authintication/barear_auth")



//ALL ROUTES ARE USED
router.post("/createpost",create_postes_controlles)
router.post("/createcommint",post_comment_controllers)
router.post("/createimage",post_image_controllers)
router.get("/getallpost",get_all_postes_controllers)



module.exports=router