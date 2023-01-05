const Sequelize=require('sequelize')
const sequelize=require('../database')

const Post = sequelize.define("Posts",{
    postid: {
        type:Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    createrid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    about: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ispost: {
        type: Sequelize.INTEGER,
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

  module.exports = Post;