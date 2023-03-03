const express = require('express');

const LoginRouter = require('./LoginRouter');
const UserRouter = require('./UserRouter');

const router = express.Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);

module.exports = router;
