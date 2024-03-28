const PostModel = require('../models/Post')

exports.allPosts = async userId => {
  try {
    const posts = await PostModel.find({ userId });
    return posts;
  } catch (err) {
    throw new Error(err.message)
  }
}
