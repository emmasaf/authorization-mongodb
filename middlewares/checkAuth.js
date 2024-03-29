const jwt = require('jsonwebtoken')
require('dotenv').config()

const key = process.env.SECRET_KEY

function checkAuth(req, res, next) {
  const token = (req.headers.authorization || ' ').replace(/Bearer\s?/, '')

  try {
    const decoded = jwt.verify(token, key)
    if (req.body.userId == decoded._id) next()
    else throw 'Fail'
  } catch (e) {
    res.status(500).json({
      message: 'Failed changing user info',
    })
  }
}

module.exports = checkAuth
