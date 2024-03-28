const express = require('express');
const { registerValidation,loginValidation } = require('../validations/auth');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', registerValidation, AuthController.register);
router.post('/login',loginValidation, AuthController.login);

module.exports = router;
