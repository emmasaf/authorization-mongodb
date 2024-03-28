const express = require('express');
const PostController = require('../controllers/PostController');
const checkToken = require('../middlewares/checkAuth')

const router = express.Router();

router.get('/all/:userId',checkToken, PostController.getPosts);

module.exports = router;
