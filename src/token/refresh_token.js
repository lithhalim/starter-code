const jwt = require('jsonwebtoken');
require('dotenv').config();


//create the refresh token 
module.exports= createRefreshToken =(user)=> jwt.sign({
    //the information will save in peload section information of user
    username:user.username,
    image:user.image,
    email:user.email,
    gender:user.gender,
    role:user.role,
    birthday:user.birthday,
    },
    //the secrete you use in the access token
    process.env.ACCESS_TOKEN_SECRET ,
    //the token will expire after these time
    {expiresIn:"7d"});
