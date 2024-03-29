const { validationResult } = require('express-validator')
const AuthService = require('../services/AuthService')

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const user = await AuthService.registerUser(req.body)
    await AuthService.sendRegistrationMail(req.body)
    const token = AuthService.generateToken(user)

    const { passwordHash, ...userData } = user._doc
    res.json({ ...userData, token })
  } catch (error) {
    res.status(500).json({
      message: 'Failed register',
    })
  }
}

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const user = await AuthService.loginUser(req.body)
    const token = AuthService.generateToken(user)

    const { passwordHash, ...userData } = user._doc
    res.json({ ...userData, token })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed login',
    })
  }
}
