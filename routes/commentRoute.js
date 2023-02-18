const express = require('express');
const router=express.Router()

const User=require('../entity/users')
const Comment=require('../entity/comments');


router.post('/comment',async(req,res)=>{
    const {postid,commenterid}=req.body
    var user = await User.findOne({_id:commenterid})
    var commentername=user.name
    var commenterimage=user.image
    const comment = new Comment({postid,commenterid,commentername,commenterimage,comment})
    try {
        var c=await comment.save();
        return res.json({success:"true",token:c._id,message:"Connected"})
      } catch (error) {
        console.log(error)
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.get('/getall/:id',async(req,res)=>{
    var data=await Comment.find({postid:req.params.id})
    return res.json(data)
})

module.exports=router