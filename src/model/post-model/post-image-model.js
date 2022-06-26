const {DataTypes}=require("sequelize")
const database=require("../../database/database")


const post_images = database.define('images', {
    // Model attributes are defined here
    image: {
      type: DataTypes.TEXT,//String Varchar(255)
    },
    imageId:{
      allowNull:false,
      type:DataTypes.INTEGER
    }
  }, {
    // Other model options go here
  });


const postes=require("../../model/post-model/post-model")
//Relation Of image
postes.hasMany(post_images,{
  foreignKey:"imageId",
  sourceKey:"id"
})
post_images.belongsTo(postes,{
  foreignKey:"imageId",
  targetKey:"id"
})

module.exports=post_images