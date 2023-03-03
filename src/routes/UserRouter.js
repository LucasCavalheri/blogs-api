const express = require('express');
const { validateCreateUser } = require('../middlewares/validateCreateUser');

const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/', validateCreateUser, UserController.createUser);

module.exports = router;
