const express = require('express');
const authRoutes = require('./authRoutes');
const userInfoRoutes = require('./userInfoRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/auth/user', userInfoRoutes);
router.use('/auth/posts', postRoutes);

module.exports = router;
