const express = require('express');

const BlogPostController = require('../controllers/BlogPostController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/search', validateToken, BlogPostController.getBlogPostByQuery);
router.get('/', validateToken, BlogPostController.getAllPostsWithUserAndCategory);
router.get('/:id', validateToken, BlogPostController.getUniquePostWithUserAndCategory);
router.post('/', validateToken, BlogPostController.createBlogPost);
router.put('/:id', validateToken, BlogPostController.updatePost);
router.delete('/:id', validateToken, BlogPostController.deletePost);

module.exports = router;
