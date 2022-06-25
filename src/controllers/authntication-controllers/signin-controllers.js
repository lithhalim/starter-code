const reguster_model=require("../../model/reguster_model/reguster_model")

module.exports=async (req,res,next)=>{

    const createAccessToken=require("../../token/access-token");
    const createRefreshToken=require("../../token/refresh_token");
    try {
        //user have from basic auth have the all information of reguster
        user=req.basicSignInUser
        //add the acces token to vertual databse
        user.accessToken=createAccessToken(user);
        //add refresh token to the database
        let record=await reguster_model.findOne({where:{email:user.email}})
        let update=await record.update({refreshtoken:createRefreshToken(user)}).then(()=>{
        })

        //send reftesh token as cookie
        res.cookie('refreshtoken',createRefreshToken,{
            httpOnly:true,
            path:'/refresh_token'
        })
        //send access token as  response
        res.status(200).json({accessToken:user.accessToken});


    }
     catch (error) {
       res.status(403).send('There Is Problem In SignIn');
       }
      
}
