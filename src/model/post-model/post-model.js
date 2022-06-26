const {DataTypes}=require("sequelize")
const database=require("../../database/database")


const postes= database.define('postes', {
    // Model attributes are defined here
    price: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    phone: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    place: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    year: {
      type: DataTypes.STRING,//String Varchar(255)
    },
    posteId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    // Other model options go here
  });


module.exports=postes