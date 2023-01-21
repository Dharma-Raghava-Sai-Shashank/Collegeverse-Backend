const { default: mongoose } = require('mongoose');
const Mongoose = require('../database')
const ID= mongoose.Schema.Types.ObjectId

const likeSchema = new Mongoose.Schema(
  {
    postid: {
      type:ID,
      required:true,
        trim:true,
    },
    likerid: {
      type:ID,
      required:true,
        trim:true,
    }
  },
  {
    timestamps:true
  }
)

const Like = Mongoose.model("Like", likeSchema);

module.exports = Like;