const express = require('express')
const UserRoute=require('./routes/userRoute')
const PostRoute=require('./routes/postRoute')
const LikeRoute=require('./routes/likeRoute')
const ConnectionRoute=require('./routes/connectionRoute')
const CommentRoute=require('./routes/commentRoute')

const User=require('./entity/users')
const Connection=require('./entity/connections')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/like',LikeRoute)
app.use('/connection',ConnectionRoute)
app.use('/comment',CommentRoute)



app.get('/',async(req,res)=>{
    return res.send("Server Started")
})

app.get('/about',async(req,res)=>{
    var data=await User.find({})
    return res.json(data)
})

app.listen(5000,()=>{
    console.log('Server Started Listening ...')
})