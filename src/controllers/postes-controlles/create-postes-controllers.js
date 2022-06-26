'use strict'
const postes_model=require("../../model/post-model/post-model")

module.exports=async(req,res)=>{
    console.log(req.body)
const creatPost=await postes_model.create(req.body);
res.json(creatPost)
}
