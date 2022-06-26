const {DataTypes}=require("sequelize")
const database=require("../../database/database")


const post_comments = database.define('comments', {
    // Model attributes are defined here
    comment: {
      type: DataTypes.TEXT,//String Varchar(255)
    },
    commentId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    // Other model options go here
  });


const postes=require("../../model/post-model/post-model")

//Relation Of Comments
postes.hasMany(post_comments,{
  foreignKey:"commentId",
  sourceKey:"id"
})
post_comments.belongsTo(postes,{
  foreignKey:"commentId",
  targetKey:"id"
})


module.exports=post_comments