'use strict'
const reaguster_model=require("../../model/reguster_model/reguster_model")
const postes=require("../../model/post-model/post-model")
const images=require("../../model/post-model/post-image-model")
const comment=require("../../model/post-model/post-comment-model")


//get all user and all postes 
module.exports=async(req,res)=>{
    const data=await reaguster_model.findAll(
        {
            include: [{
                model:postes,
                required: true,
                include:[{
                    model:comment,
                    required: true,
                },
                {
                    model:images,
                    required: true,
                }]
               }]
        }
    )
    let filterData=[]
    //create new object with specific element i need 
    data.forEach((data)=>{
        let dataclass=new Alluser(data.username,data.email,data.role,data.image,data.postes)
        filterData.push(dataclass)
    })
    res.json(filterData)
}


class Alluser{
    constructor(username,email,role,image,postes){
        this.username=username,
        this.email=email,
        this.role=role,
        this.image=image,
        this.postes=postes
    }
}