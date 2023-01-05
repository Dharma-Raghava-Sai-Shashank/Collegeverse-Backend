const Sequelize=require('sequelize')
const sequelize=require('../database')

const Like = sequelize.define("Likes",{
    likeid: {
        type:Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    postid: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    likerid: {
        type: Sequelize.STRING,
        allowNull: false,
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

  module.exports = Like;