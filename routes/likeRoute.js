const express = require('express');
const router=express.Router()

const Post=require('../entity/posts')
const Like=require('../entity/likes');


router.post('/like',async(req,res)=>{
    const {postid,likerid}=req.body
    const like = new Like({postid,likerid})
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
    try {
        const l = await Like.deleteOne({postid:postid,likerid:likerid})
        return res.json({success:"true",token:l._id,message:"Unliked"})
      } catch (error) {
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.get('/getall/:id',async(req,res)=>{
    var data=await Like.find({likerid:req.params.id})
    var post=Array()
    for(let i=0;i<data.length;i++)
    {
        post.push(await Post.findOne({_id:data[i].postid}))
    }
    return res.json(post)
})

module.exports=router