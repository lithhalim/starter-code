'use strict'
const postes_model=require("../../model/post-model/post-model")
const images=require("../../model/post-model/post-image-model")
const comment=require("../../model/post-model/post-comment-model")

module.exports=async(req,res)=>{
const getdata=await postes_model.findAll({
    include: [{
        model:images,
        required: true
       },
       {
        model:comment,
        required: true
       }
    ]  
  
});
res.json(getdata)
}
