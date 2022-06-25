const {DataTypes}=require("sequelize")
const database=require("../../database/database")


module.exports = database.define('reguster', {
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
    role:{//ENUM MEAN YOU NEED TO SELECT ON OF THISE JUST YOU CANT INSERT ANOTHER TYPE
      type:DataTypes.ENUM('admin','writer','editor','user'),
      defaultValue:"user",
    },
    action:{ 
      type: DataTypes.VIRTUAL,
      get(){
        const acl={
          user:['read'],
          writer:['read','create'],
          editor:['read','create','update'],
          admin:['read','create','update']
        }
        return acl[this.role];
      }
    }
  }, {
    // Other model options go here
  });
