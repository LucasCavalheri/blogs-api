const express = require('express');
const { validateCreateUser } = require('../middlewares/validateCreateUser');
const { validateToken } = require('../middlewares/validateToken');

const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', validateToken, UserController.getAllUsers);
router.get('/:id', validateToken, UserController.getUserById);
router.post('/', validateCreateUser, UserController.createUser);
router.delete('/me', validateToken, UserController.deleteUser);

module.exports = router;
