const { default: mongoose } = require('mongoose');
const Mongoose = require('../database')
const ID= mongoose.Schema.Types.ObjectId

const connectionSchema = new Mongoose.Schema(
  {
    postid: {
      type:ID,
      required:true,
        trim:true,
    },
    fromid: {
      type:ID,
      required:true,
        trim:true,
    },
    toid: {
      type:ID,
      required:true,
        trim:true,
    },
    comment:{
      type: String,
      required:false,
    },
    status: {
      type: Number,
      allowNull: true,
    }
  },
  {
    timestamps:true
  }
)

const Connection = Mongoose.model("Connection", connectionSchema);

module.exports = Connection;