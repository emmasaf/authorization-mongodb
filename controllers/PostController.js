const PostService = require('../services/PostService')

exports.getPosts = async (req, res) => {
  try {
    const { userId } = req.params
    
    try {
      const posts = await PostService.allPosts(userId)
      res.json(posts)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Failed getting user Posts',
    })
  }
}
