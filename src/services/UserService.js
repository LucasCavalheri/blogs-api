const { User } = require('../models');

const getAllUsers = () =>
  User.findAll({ attributes: { exclude: ['password'] } });

const searchByPassword = (password) => User.findOne({ where: { password } });

const searchByEmail = (email) => User.findOne({ where: { email } });

const createUser = (userData) => User.create(userData);

module.exports = {
  getAllUsers,
  searchByPassword,
  searchByEmail,
  createUser,
};
