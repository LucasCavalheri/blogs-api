const { Category } = require('../models');

const createCategory = async (categoryData) => Category.create(categoryData);

module.exports = {
  createCategory,
};
