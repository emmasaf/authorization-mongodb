const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  avatarUrl:String
},
{
  timestamps:true,
},
)

module.exports =  mongoose.model("user",UserSchema)
