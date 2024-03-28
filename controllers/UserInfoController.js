const UserInfoService = require('../services/UserInfoService')

exports.getUserInfo = async (req, res) => {
  try {
    const user = await UserInfoService.userInfo(req.userId)

    if (!user) {
      return res.status(404).json({
        message: 'Cant find user',
      })
    }

    const { passwordHash, ...userData } = user._doc

     res.json(userData)
  } catch (error) {
     res.status(500).json({
      message: 'Failed getting user info',
    })
  }
}
