const { Category } = require('../models');

const getAllCategories = async () => Category.findAll();

const searchCategoriesById = async (categoriesId) => {
  const categoriesIdExists = await categoriesId.map((category) =>
    Category.findOne({ where: { id: category } }));
    
  const exists = await Promise.all(categoriesIdExists);

  return exists;
};

const createCategory = async (categoryData) => Category.create(categoryData);

module.exports = {
  getAllCategories,
  searchCategoriesById,
  createCategory,
};
