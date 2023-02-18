const { default: mongoose } = require('mongoose');
const Mongoose = require('../database')
const ID= mongoose.Schema.Types.ObjectId

const commentSchema = new Mongoose.Schema(
  {
    postid: {
      type:ID,
      required:true,
        trim:true,
    },
    commenterid: {
      type:ID,
      required:true,
        trim:true,
    },
    commentername:{
        type:String
    },
    commenterimage:{
        type:String
    },
    comment:{
        type:String
    }
  },
  {
    timestamps:true
  }
)

const Comment = Mongoose.model("Comment", commentSchema);

module.exports = Comment;