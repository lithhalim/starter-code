'use strict'
const reaguster_model=require("../../model/reguster_model/reguster_model")

module.exports=async(req,res)=>{
    const data=await reaguster_model.findAll()
    let filterData=[]
    //create new object with specific element i need 
    data.forEach((data)=>{
        let dataclass=new Alluser(data.username,data.email,data.role,data.image)
        filterData.push(dataclass)
    })
    res.json(filterData)
}


class Alluser{
    constructor(username,email,role,image){
        this.username=username,
        this.email=email,
        this.role=role,
        this.image=image
    }
}