const { default: mongoose } = require('mongoose');
const Mongoose = require('../database')
const ID= mongoose.Schema.Types.ObjectId

const postSchema = new Mongoose.Schema(
  {
    createrid:{
      type:ID,
      required:true,
        trim:true,
    },
    creatername:{
      type: String,
      required:false,
    },
    createrimage:{
      type: String,
      required:false,
    },
    postname: {
      type: String,
      required:false,
    },
    postdetail: {
      type: String,
      required:false,
    },
    image: {
      type: String,
      required:false,
    },
    is_post:{
      type:Number,
      required:false,
    }
  },
  {
    timestamps:true
  }
)

const Post = Mongoose.model("Post", postSchema);

module.exports = Post;