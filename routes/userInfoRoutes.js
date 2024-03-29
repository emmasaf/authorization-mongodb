const express = require('express');
const UserInfoController = require('../controllers/UserInfoController');
const checkAuth = require('../middlewares/checkAuth')

const router = express.Router();

router.get('/',checkAuth, UserInfoController.getUserInfo);

module.exports = router;
