const UserModel = require('../models/User')

exports.userInfo = async userId => {
  return await UserModel.findById(userId)
}
