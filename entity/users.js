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
    }
  },
  {
    timestamps:true
  }
)

const User = Mongoose.model("User", userSchema);

module.exports = User;