const {DataTypes}=require("sequelize")
const database=require("../../database/database")


const reguster = database.define('regusters', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,//String Varchar(255)
      allowNull: false//you must input value
    },
    password: {
      type: DataTypes.STRING,//String Varchar(255)
      allowNull: false//you must input value
    },
    email: {
      type: DataTypes.STRING,//String Varchar(255)
      allowNull: false//you must input value
    },
    gender: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    birthday: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    image: {
        type: DataTypes.TEXT,//String Varchar(3360)
        defaultValue:"https://media.istockphoto.com/vectors/user-avatar-",
        // allowNull defaults to true
    },
    accessToken: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: DataTypes.VIRTUAL,
    },
    refreshtoken: {
      type: DataTypes.TEXT,
    },
  }, {
    // Other model options go here
  });


const postes=require("../post-model/post-model");
  //Relation for postes
  reguster.hasMany(postes,{
    foreignKey:"posteId",
    sourceKey:"id"
  })
  postes.belongsTo(reguster,{
    foreignKey:"posteId",
    targetKey:"id"
  })
  
  module.exports =reguster