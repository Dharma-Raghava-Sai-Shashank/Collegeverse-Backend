const { default: mongoose } = require('mongoose');
const Mongoose = require('../database')
const ID= mongoose.Schema.Types.ObjectId

const connectionSchema = new Mongoose.Schema(
  {
    fromid: {
      type:ID,
      required:true,
        trim:true,
    },
    toid: {
      type:ID,
      required:true,
        trim:true,
    }
  },
  {
    timestamps:true
  }
)

const Connection = Mongoose.model("Connection", connectionSchema);

module.exports = Connection;