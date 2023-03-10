const BlogPostService = require('../services/BlogPostService');
const CategoryService = require('../services/CategoryService');

const getAllPostsWithUserAndCategory = async (_req, res) => {
  const allPostsWithUserAndCategory = await BlogPostService.getAllPostsWithUserAndCategory();

  return res.status(200).json(allPostsWithUserAndCategory);
};

const getUniquePostWithUserAndCategory = async (req, res) => {
  const { id } = req.params;

  const uniquePostWithUserAndCategory = await BlogPostService.getUniquePostWithUserAndCategory(id);

  if (!uniquePostWithUserAndCategory) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(uniquePostWithUserAndCategory);
};

const getBlogPostByQuery = async (req, res) => {
  const { q } = req.query;

  const blogPost = await BlogPostService.getBlogPostByQuery(q);

  if (!q) {
    const allBlogPosts = await BlogPostService.getAllPostsWithUserAndCategory();
    return res.status(200).json(allBlogPosts);
  }

  return res.status(200).json(blogPost);
};

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.payload.payload.id;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const categoryIdsExists = await CategoryService.searchCategoriesById(categoryIds);

  if (categoryIdsExists.includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const blogPostCreated = await BlogPostService
    .createBlogPost({ title, content, userId, categoryIds });

  return res.status(201).json(blogPostCreated);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.payload.payload.id;

  const isPostOwner = await BlogPostService.searchPostByUserId(userId);

  if (!isPostOwner) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const updatedPost = await BlogPostService.updatePost(id, { title, content });

  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.payload.payload.id;

  const isPostOwner = await BlogPostService.checkUserPost(id);
  const postExists = await BlogPostService.searchPostById(id);

  if (!postExists) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (isPostOwner.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  await BlogPostService.deletePost(id);

  return res.status(204).end();
};

module.exports = {
  getAllPostsWithUserAndCategory,
  getUniquePostWithUserAndCategory,
  getBlogPostByQuery,
  createBlogPost,
  updatePost,
  deletePost,
};
