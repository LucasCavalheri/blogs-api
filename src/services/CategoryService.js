const { Category } = require('../models');

const getAllCategories = async () => Category.findAll();

const createCategory = async (categoryData) => Category.create(categoryData);

module.exports = {
  getAllCategories,
  createCategory,
};
