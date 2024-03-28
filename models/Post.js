const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  }
})

module.exports =  mongoose.model("post",PostSchema)
