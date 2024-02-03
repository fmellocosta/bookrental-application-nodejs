const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

// Create a new user
// router.post('/users', UserController.createUser);

// Get a list of all users
router.get('/users', UserController.getUsers);

// Get a specific user by ID
router.get('/users/:userId', UserController.getUserById);

// Update a user by ID
// router.put('/users/:userId', UserController.updateUser);

// Delete a user by ID
// router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;
