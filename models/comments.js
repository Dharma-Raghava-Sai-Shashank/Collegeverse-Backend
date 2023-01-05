const Sequelize=require('sequelize')
const sequelize=require('../database')

const Comment = sequelize.define("Comments",{
    commentid: {
        type:Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    postid: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    commenterid: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    comment:{
        type: Sequelize.STRING,
        allowNull: true,
    }
})

sequelize
  .sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

  module.exports = Comment;