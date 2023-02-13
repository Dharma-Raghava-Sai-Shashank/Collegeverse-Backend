const express = require('express');
const {ObjectId} = require('mongoose');
const router=express.Router()

const Post=require('../entity/posts')
const Like=require('../entity/likes');
const User = require('../entity/users');


router.post('/post',async(req,res)=>{
    const {_id,createrid,creatername,createrimage,postname,postdetail,image,is_post}=req.body;
    var user=await User.findOne({_id:createrid})
    var a=user.name
    var b=user.image
    console.log(a,b)
    const post = new Post({createrid,a,b,postname,postdetail,image,is_post})
    var p=await post.save()
    return res.json({success:"true",token:p._id,message:"Posted Successfully"})
})

router.get('/getall',async(req,res)=>{
    var data=await Post.find({})
    return res.json(data)
})

router.get('/getall/:id',async(req,res)=>{
    var data=await Post.find({createrid:ObjectId(req.params.id)})
    return res.json(data)
})

router.get('/get/:id',async(req,res)=>{
    var data=await Post.find({_id:ObjectId(req.params.id)})
    return res.json(data)
})

router.post('/update',async(req,res)=>{
    const {_id,createrid,creatername,createrimage,postname,postdetail,image,is_post}=req.body;
    var data=await Post.updateOne({_id:Mongoose.Schema.Types.ObjectId(_id)},{$set:{postname:postname,postdetail:postdetail,image:image,is_post:is_post}})
    return res.json({success:"true",token:data._id,message:"Update Successfull"})
})

router.post('/like',async(req,res)=>{
    const {postid,likerid}=req.body
    var a=Mongoose.Schema.Types.ObjectId(postid)
    var b=Mongoose.Schema.Types.ObjectId(likerid)
    const like = new Like({a,b})
    try {
        var l=await like.save();
        return res.json({success:"true",token:l._id,message:"Liked"})
      } catch (error) {
        console.log(error)
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.post('/unlike',async(req,res)=>{
    const {postid,likerid}=req.body
    var a=Mongoose.Schema.Types.ObjectId(postid)
    var b=Mongoose.Schema.Types.ObjectId(likerid)
    try {
        const l = Like.deleteOne({postid:a,likerid:b})
        return res.json({success:"true",token:l._id,message:"Liked"})
      } catch (error) {
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.get('/like/getall/:id',async(req,res)=>{
    var data=await Like.find({likerid:Mongoose.Schema.Types.ObjectId(req.params.id)})
    var post=""
    for(dat in data)
    {
        post+=await Post.findOne({postid:Mongoose.Schema.Types.ObjectId(dat.postid)})
    }
    return res.json(post)
})

module.exports=router