const express = require('express');
const { signup, login } = require('../controllers/authController');
const { getAllUsers, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Auth routes
router.post('/auth/signup', signup);
router.post('/auth/login', login);

// Protected routes
router.get('/users', authMiddleware, roleMiddleware(['admin']), getAllUsers);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;