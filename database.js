const Sequelize = require('sequelize')

const sequelize = new Sequelize("Collegeverse","root","Arjun@9920",{
    dialect : "mysql",
    host : "https://collegeverse.onrender.com/"
})

module.exports = sequelize