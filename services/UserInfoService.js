const UserModel = require('../models/User')

exports.userInfo = async userId => {
  try{
    return await UserModel.findById(userId)
  }catch(e){
    throw e
  }
}
