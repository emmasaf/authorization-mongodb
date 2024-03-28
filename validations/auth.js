const {body} = require('express-validator')

 const registerValidation = [
  body('email',"Wrong email format").isEmail(),
  body('password',"Password must contain minimum 5 symbols").isLength({min:5}),
  body('fullName',"Fullname must contain minimum 5 symbols").isLength({min:3}),
  body('avatarUrl').optional().isURL(),
]

const loginValidation = [
  body('email',"Wrong email format").isEmail(),
  body('password',"Password must contain minimum 5 symbols").isLength({min:5}),
]

module.exports = {registerValidation,loginValidation}