const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/LoginController');
const { isBodyValid } = require('../middlewares/validateLoginBody');

router.post('/', isBodyValid, LoginController.login);

module.exports = router;
