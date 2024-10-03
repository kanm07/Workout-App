const express = require('express');
const router = express.Router();

//Controllers
const { loginUser, signupUser } = require('../controllers/userController');

//Login Route
router.post('/login', loginUser);

//SignUp Route
router.post('/signup', signupUser);

module.exports = router;