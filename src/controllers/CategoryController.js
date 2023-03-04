const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const categoryData = req.body;

  const categoryCreated = await CategoryService.createCategory(categoryData);

  return res.status(201).json(categoryCreated);
};

module.exports = {
  createCategory,
};
