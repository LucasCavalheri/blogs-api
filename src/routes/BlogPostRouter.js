const express = require('express');

const BlogPostController = require('../controllers/BlogPostController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken, BlogPostController.getAllPostsWithUserAndCategory);
router.post('/', validateToken, BlogPostController.createBlogPost);

module.exports = router;
