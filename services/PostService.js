const PostModel = require('../models/Post')

exports.allPosts = async userId => {
  try {
    const posts = await PostModel.find({ userId });
    return posts;
  } catch (err) {
    throw new Error(err.message)
  }
}

exports.createPost = async data => {
  try {
    const post = await PostModel.create(data);
    return post;
  } catch (err) {
    throw new Error(err.message)
  }
}

exports.updatePost = async data => {
  try {
    const post = await PostModel.updateOne({_id:data.postId},data);
    return post;
  } catch (err) {
    throw new Error(err.message)
  }
}

exports.deletPostById = async postId => {
  try {
    const post = await PostModel.deleteOne({_id:postId});
    return post;
  } catch (err) {
    throw new Error(err.message)
  }
}


exports.getPostById = async postId => {
  try {
    const post = await PostModel.findOne({ _id:postId });
    return post;
  } catch (err) {
    throw new Error(err.message)
  }
}