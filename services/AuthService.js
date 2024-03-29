const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')
require('dotenv').config()

const key = process.env.SECRET_KEY
const user_email = process.env.SEND_MAIL
const user_password = process.env.SEND_MAIL_PASSWORD

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
    throw error
  }
}

exports.sendRegistrationMail = async ({ email }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user_email,
        pass: user_password,
      },
    })

    const info = await transporter.sendMail({
      from: user_email,
      to: email,
      subject: 'Registration ✔',
      text: 'You were successfully registered',
      html: '',
    })

    return info
  } catch (e) {
    throw e
  }
}

exports.loginUser = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email })

    const isValidpass = await bcrypt.compare(password, user._doc.passwordHash)

    if (!isValidpass) {
      console.log("Is not valid")
      return "Is not valid"
    }

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

exports.generateToken = user => {
  const payload = {
    _id: user._id,
  }

  return jwt.sign(payload, key, { expiresIn: '1h' })
}
