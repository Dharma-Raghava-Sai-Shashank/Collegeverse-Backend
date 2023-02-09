const Mongoose = require('../database')

const userSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required:true,
        trim:true,
    },
    email: {
      type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    password: {
      type: String,
      required:true,
    },
    phone: {
      type: String,
      required:false,
    },
    about: {
      type: String,
      required:false,
    },
    image: {
      type: String,
      required:false,
    },
    otp:{
      type:String,
      default:"0000"
    },
    otptime:{
      type:Date,
      default:Date.now()
    }
  },
  {
    timestamps:true
  }
)

const User = Mongoose.model("User", userSchema);

module.exports = User;