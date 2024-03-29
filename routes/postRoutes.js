const express = require('express');
const PostController = require('../controllers/PostController');
const checkAuth = require('../middlewares/checkAuth')

const router = express.Router();

router.get('/all',checkAuth, PostController.getPosts);
router.get('/:postId',checkAuth, PostController.getPost);
router.delete('/delete/:postId', checkAuth,PostController.deletePost);
router.post('/add', checkAuth,PostController.addPost);
router.put('/edit/:postId', checkAuth,PostController.editPost);




module.exports = router;
