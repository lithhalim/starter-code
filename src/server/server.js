
'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
var http = require('http')

//require soket io section 
const {Server} =require("socket.io")
const server = http.createServer(app);
const io=new Server(server,{
  cors:{
      origin:"http://localhost:3000",
      methods:["GET","POST","PUT","DELETE"]
  }
})

//to mack safe connext between front and back
const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000/', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors()) // Use this after the variable declaration

// support url encoded bodies{parser use to accept the encoded json come from front }
app.use(express.urlencoded({ extended: false }));
// support json encoded bodies
app.use(express.json());

//express middelware to handel cookies come from front 
const cookieParser = require('cookie-parser')
app.use(cookieParser())



//-----------------------------------------------routes section--------------------------------------------//
const authntication_routes=require("../routes/authntication_routes/authntication_routes")
app.use(authntication_routes)



const poste_routes=require("../routes/postes-routes/postes-rout")
app.use(poste_routes)











//--------------------------------Error Handeler--------------------------------------//
const NotFound404=require("../middelware/404-500/404");
const ErrorHandeler=require("../middelware/404-500/500");

app.use(ErrorHandeler);
app.use(NotFound404);
//------------------------------DataBase Connection-----------------------------------//

//Connection With The Database
const database=require("../database/database");
const { post } = require('../routes/authntication_routes/authntication_routes');
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  server.listen(PORT, async() => {
        try {
            await database.authenticate();
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            await database.sync({alter:true});
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }      
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
    



//---------------------------------------export file section---------------------------------------------//
    module.exports ={
    app: app,
    start: start,
    server:server
};
