'use strict'
const images_model=require("../../model/post-model/post-image-model")

module.exports=async(req,res)=>{
const creatPost=await images_model.create(req.body);
res.json(creatPost)
}
