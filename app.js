const express = require('express')
const User=require('./models/users')
// const Post=require('./models/posts')
// const Like=require('./models/likes')
// const Comment=require('./models/comments')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',async(req,res)=>{
    return res.send("Server Started")
})

app.get('/about',async(req,res)=>{
    var data=await User.find({})
    return res.send(data)
})

app.listen(5000,()=>{
    console.log('Server Started Listening ...')
})