const express = require('express');

const LoginRouter = require('./LoginRouter');

const router = express.Router();

router.use('/login', LoginRouter);

module.exports = router;
