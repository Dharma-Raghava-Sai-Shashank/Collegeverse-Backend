const express = require('express');
const router=express.Router()

const User=require('../entity/users')
const Connection=require('../entity/connections');


router.post('/connect',async(req,res)=>{
    const {fromid,toid}=req.body
    const connection = new Connection({fromid,toid})
    try {
        var c=await Connection.save();
        return res.json({success:"true",token:c._id,message:"Connected"})
      } catch (error) {
        console.log(error)
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.post('/disconnect',async(req,res)=>{
    const {fromid,toid}=req.body
    try {
        const l = await Connection.deleteOne({fromid:fromid,toid:toid})
        return res.json({success:"true",token:l._id,message:"Disconnected"})
      } catch (error) {
            return res.json({success:"false",token:"",message:"Database Error"})
      }
})

router.get('/getall/:id',async(req,res)=>{
    var data=await Connection.find({fromid:req.params.id})
    var user=Array()
    for(let i=0;i<data.length;i++)
    {
        user.push(await User.findOne({_id:data[i].toid}))
    }
    return res.json(user)
})

module.exports=router