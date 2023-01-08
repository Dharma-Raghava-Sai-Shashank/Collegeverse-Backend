const Mongoose = require("mongoose")

Mongoose.connect('mongodb+srv://shashank:Arjun@cluster0.3pp09ti.mongodb.net/Collegeverse?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
        console.log("Connected to mongodb database")
    }).catch((err)=> console.log(err))

module.exports = Mongoose