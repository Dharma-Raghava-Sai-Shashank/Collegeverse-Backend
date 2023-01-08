const express = require('express')
// const User=require('./models/users')
// const Post=require('./models/posts')
// const Like=require('./models/likes')
// const Comment=require('./models/comments')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());

const Mongoose = require('mongoose')
Mongoose.set('strictQuery', false);
const db ='mongodb+srv://saishashank:Arjun@cluster0.fevr2iu.mongodb.net/Collegeverse?retryWrites=true&w=majority'
Mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log("Connected to mongodb database")
    }).catch((err)=> console.log(err))

app.get('/',async(req,res)=>{
    return res.send("Server Started")
})

app.listen(5000,()=>{
    console.log('Server Started Listening ...')
})