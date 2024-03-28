const jwt = require('jsonwebtoken')
require('dotenv').config()

const key = process.env.SECRET_KEY

function check(req, res, next) {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (token) {
    try {
      const decoded = jwt.verify(token, key)

      req.userId = decoded._id
      next()
    } catch (e) {
      return res.status(403).json({ message: 'User does not exist' })
    }
  } else {
    return res.status(403).json({ message: 'User does not exist' })
  }
}

module.exports = check
