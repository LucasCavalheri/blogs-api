const express = require('express');

const LoginRouter = require('./LoginRouter');
const UserRouter = require('./UserRouter');
const CategoryRouter = require('./CategoryRouter');
const BlogPostRouter = require('./BlogPostRouter');

const router = express.Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);
router.use('/categories', CategoryRouter);
router.use('/post', BlogPostRouter);

module.exports = router;
