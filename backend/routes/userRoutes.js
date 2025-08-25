const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddleware');

// Public routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Protected routes
router.get('/', authenticateToken, isAdmin, userController.getAllUsers); // only admin
router.put('/:id', authenticateToken, userController.updateUser);        // self or admin
router.delete('/:id', authenticateToken, userController.deleteUser);     // self or admin

module.exports = router;
