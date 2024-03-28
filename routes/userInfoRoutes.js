const express = require('express');
const UserInfoController = require('../controllers/UserInfoController');
const checkToken = require('../middlewares/checkAuth')

const router = express.Router();

router.get('/',checkToken, UserInfoController.getUserInfo);

module.exports = router;
