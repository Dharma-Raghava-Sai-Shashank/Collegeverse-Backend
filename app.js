const express = require('express')
const UserRoute=require('./routes/userRoute')
const PostRoute=require('./routes/postRoute')
const User=require('./entity/users')
const Post=require('./entity/posts')
const Like=require('./entity/likes')
const Connection=require('./entity/connections')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/user',UserRoute)
app.use('/post',PostRoute)

app.get('/',async(req,res)=>{
    return res.send("Server Started")
})

app.get('/about',async(req,res)=>{
    var data=await User.find({})
    return res.json(data)
})


app.post('/addpost',async(req,res)=>{
    const {createrid,postname,postdetail,member,image,division}=req.body
    const post = new Post({createrid,postname,postdetail,member,image,division})
    try {
        await post.save();
        return res.json({success:"true",message:"Post succeccfull"})
      } catch (error) {
            return res.json({success:"false",message:"Post unsucceccfull"})
      }
})

app.get('/getallpost',async(req,res)=>{
    var data=await Post.find({})
    return res.json(data)
})

app.post('/addlike',async(req,res)=>{
    const {postid,likerid}=req.body
    const post = new Like({postid,likerid})
    try {
        await post.save();
        return res.json({success:"true",message:"Like succeccfull"})
      } catch (error) {
            return res.json({success:"false",message:"Like unsucceccfull"})
      }
})

app.post('/getuserlike',async(req,res)=>{
    const {_id}=req.body
    var data=await Like.find({likerid:_id})
    var post
    for(dat in data)
    {
        post+=await Post.findOne({postid:dat.postid})
    }
    return res.json(post)
})

app.post('/getuserpost',async(req,res)=>{
    const {_id}=req.body
    var data=await Post.find({createrid:_id})
    return res.json(data)
})

app.post('/profile',async(req,res)=>{
    const {_id}=req.body
    var data=await User.findOne({_id:_id})
    return res.json(data)
})

app.post('/request',async(req,res)=>{
    const {postid,fromid,toid,comment}=req.body
    const connection = new Connection({postid,fromid,toid,comment,1:Number})
    try {
        await connection.save();
        return res.json({success:"true",message:"Request succeccfull"})
      } catch (error) {
            return res.json({success:"false",message:"Request unsucceccfull"})
      }
})

app.post('/getuserpostrequest',async(req,res)=>{
    const {postid}=req.body
    var data=await Connection.find({postid:postid,status:0})
    return res.json(data)
})

app.post('/getuserpostaccept',async(req,res)=>{
    const {postid}=req.body
    var data=await Connection.find({postid:postid,status:1})
    return res.json(data)
})

app.post('/accept',async(req,res)=>{
    const {_id,postid}=req.body
    const connection = new Connection({postid,_id,toid,comment,1:Number})
    try {
        await connection.save();
        return res.json({success:"true",message:"Accept succeccfull"})
      } catch (error) {
            return res.json({success:"false",message:"Accept unsucceccfull"})
      }
})

app.listen(5000,()=>{
    console.log('Server Started Listening ...')
})