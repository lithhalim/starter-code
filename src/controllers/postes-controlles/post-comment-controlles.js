'use strict'
const postes_model=require("../../model/post-model/post-comment-model")

module.exports=async(req,res)=>{
const creatPost=await postes_model.create(req.body);
res.json(creatPost)
}
