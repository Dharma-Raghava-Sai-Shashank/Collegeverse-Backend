const Sequelize=require('sequelize')
const sequelize=require('../database')

const User = sequelize.define("Users",{
    userid: {
        type:Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      image: {
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

  module.exports = User;