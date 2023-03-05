const { User } = require('../models');

const excludePassword = { attributes: { exclude: ['password'] } };

const getAllUsers = () => User.findAll(excludePassword);

const getUserById = (id) => User.findByPk(id, excludePassword);

const searchByPassword = (password) => User.findOne({ where: { password } });

const searchByEmail = (email) => User.findOne({ where: { email } });

const createUser = (userData) => User.create(userData);

const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
  getAllUsers,
  getUserById,
  searchByPassword,
  searchByEmail,
  createUser,
  deleteUser,
};
