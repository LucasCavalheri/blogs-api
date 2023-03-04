const CategoryService = require('../services/CategoryService');

const getAllCategories = async (_req, res) => {
  const categories = await CategoryService.getAllCategories();

  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const categoryData = req.body;

  const categoryCreated = await CategoryService.createCategory(categoryData);

  return res.status(201).json(categoryCreated);
};

module.exports = {
  getAllCategories,
  createCategory,
};
