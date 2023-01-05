const express = require('express')
const mysql = require('mysql')
const User=require('./models/users')
const Post=require('./models/posts')
const Like=require('./models/likes')
const Comment=require('./models/comments')
const e = require('express')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',async(req,res)=>{
    return res.send("Server Started")
})
// Signup :
app.post('/signup',async(req,res)=>{
    console.log(req.body)
    try{
        var s=await User.create({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:"",
        about:"",
        image:""
    })}catch(err){
        return res.send({"success":"false","token":""})
    }
    return res.send({"success":"true","token":s.dataValues.userid})
})
 
// Signin :
app.post('/signin',async(req,res)=>{
    var exits=await User.findOne({ 
        where : {email:req.body.email}
    })
    if(exits&&req.body.password==exits.password)
        return res.send({"success":"true","token":exits.userid})
    return res.send({"success":"false","token":""})
})

app.get('/getallpost',async(req,res)=>{
    let data = await User.findAll({
        // where : {ispost:1}
    })
    return res.send(data)
})

app.get('/getallquery',async(req,res)=>{
    let data = await Post.findAll({
        where : {ispost:0}
    })
    return res.send(data)
})

app.post('/user',async(req,res)=>{
    console.log(req.body)
    await User.create({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        about:req.body.about,
        image:req.body.image
    }).then(res.send({"success":"true"}));               
})

app.post('/post',async(req,res)=>{
    console.log(req.body)
    await Post.create({
        createrid: req.body.createrid,
        about:req.body.about,
        description:req.body.description,
        image:req.body.image,
        ispost:req.body.ispost
    }).then(res.send({"success":"true"}));               
})

app.post('/like',async(req,res)=>{
    console.log(req.body)
    await Like.create({
        postid: req.body.postid,
        likerid: req.body.likerid
    }).then(res.send({"success":"true"}));               
})

app.post('/comment',async(req,res)=>{
    console.log(req.body)
    await Comment.create({
        postid: req.body.postid,
        commenterid: req.body.commenterid,
        comment: req.body.comment
    }).then(res.send({"success":"true"}));               
})

app.listen(5000,()=>{
    console.log('Server Started Listening ...')
})
