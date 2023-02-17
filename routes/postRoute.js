const express = require('express');
const router=express.Router()

const Post=require('../entity/posts')
const Like=require('../entity/likes');
const User = require('../entity/users');


router.post('/post',async(req,res)=>{
    const {_id,createrid,postname,postdetail,image,is_post}=req.body;
    var user=await User.findOne({_id:createrid})
    var creatername=user.name
    var createrimage=user.image
    console.log(a,b)
    const post = new Post({createrid,creatername,createrimage,postname,postdetail,image,is_post})
    var p=await post.save()
    return res.json({success:"true",token:p._id,message:"Posted Successfully"})
})

router.get('/getall',async(req,res)=>{
    var data=await Post.find({})
    return res.json(data)
})

router.get('/getall/:id',async(req,res)=>{
    var data=await Post.find({createrid:req.params.id})
    return res.json(data)
})

router.get('/get/:id',async(req,res)=>{
    var data=await Post.find({_id:req.params.id})
    return res.json(data)
})

router.post('/update',async(req,res)=>{
    const {_id,createrid,creatername,createrimage,postname,postdetail,image,is_post}=req.body;
    var data=await Post.updateOne({_id:_id},{$set:{postname:postname,postdetail:postdetail,image:image,is_post:is_post}})
    return res.json({success:"true",token:data._id,message:"Update Successfull"})
})

module.exports=router