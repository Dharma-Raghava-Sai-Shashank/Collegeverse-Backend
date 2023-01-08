const Mongoose = require("mongoose")

Mongoose.set('strictQuery', false);
const db ='mongodb+srv://saishashank:Arjun@cluster0.fevr2iu.mongodb.net/Collegeverse?retryWrites=true&w=majority'
Mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log("Connected to mongodb database")
    }).catch((err)=> console.log(err))

module.exports = Mongoose