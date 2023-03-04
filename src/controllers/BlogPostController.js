const BlogPostService = require('../services/BlogPostService');
const CategoryService = require('../services/CategoryService');

const getAllPostsWithUserAndCategory = async (_req, res) => {
  const allPostsWithUserAndCategory = await BlogPostService.getAllPostsWithUserAndCategory();

  return res.status(200).json(allPostsWithUserAndCategory);
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

module.exports = {
  getAllPostsWithUserAndCategory,
  createBlogPost,
};
