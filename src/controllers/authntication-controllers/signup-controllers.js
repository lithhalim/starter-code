'use strict'
//required section 
const bcrypt = require('bcrypt');
const reguster_model=require("../../model/reguster_model/reguster_model")

//implimantation
module.exports=async(req,res,next)=>{
    //The Data Come From FrontEnd
    const{username,password,image,email,gender,role,birthday}=req.body;
    try{
        //Hashing The Password For More Sequre
        let hashPassword=await bcrypt.hash(password,10);
        //Ceck  If The Email Is Token Or Nut
        let user=await reguster_model.findOne({where:{email:email}});
        //If Email Is Taken Response Erorr
        if(user){res.json({email:"Email Is Taken"});}
        //If Email Not Token Creat New User
            if(!user){
                let newRecord=await reguster_model.create({
                username:username,
                password:hashPassword,
                image:image,
                email:email,
                gender:gender,
                role:role,
                birthday:birthday,
               });
                res.json(newRecord.dataValues)
                res.status(201)
            }
    }
    catch(err){ res.status(403).send('There Is Problem In Register')}
}
