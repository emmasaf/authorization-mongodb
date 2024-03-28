const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')
require('dotenv').config()

const key = process.env.SECRET_KEY

exports.registerUser = async ({ email, password, fullName, avatarUrl }) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new UserModel({
      email,
      passwordHash,
      fullName,
      avatarUrl,
    })

    return await user.save()
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed register',
    })
  }
}

exports.loginUser = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({email})

    if(!user){
      return res.status(404).json({
        message:"User with this email does not exist"
      })
    }

    const isValidpass = await bcrypt.compare(password,user._doc.passwordHash)
  
    if(!isValidpass){
      return res.status(404).json({
        message:"User password is wrong"
      })
    }

    return user
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed login',
    })
  }
}

exports.generateToken = user => {
  const payload = {
    _id: user._id,
  }

  return jwt.sign(payload, key, { expiresIn: '1h' })
}
