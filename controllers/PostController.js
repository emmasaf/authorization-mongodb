const PostService = require('../services/PostService')

exports.getPosts = async (req, res) => {
  try {
    const { userId } = req.body

    const posts = await PostService.allPosts(userId)
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({
      message: 'Failed getting user Posts',
    })
    throw error
  }
}

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params

    const post = await PostService.deletPostById(postId)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      message:
        'Something went wrong while deleting the post. Please check the data.',
    })
    throw error
  }
}

exports.addPost = async (req, res) => {
  try {
    const data = req.body
    const post = await PostService.createPost(data)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add the post. Please check the data.',
    })
    throw error
  }
}

exports.editPost = async (req, res) => {
  try {
    const { postId } = req.params

    const newData = req.body

    const post = await PostService.updatePost({ postId, ...newData })
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to edit the post. Please check the data.',
    })
    throw error
  }
}

exports.getPost = async (req, res) => {
  try {
    const { postId } = req.params

    const post = await PostService.getPostById(postId)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      message: 'Failed getting user post',
    })
    throw error
  }
}
