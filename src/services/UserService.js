const { User } = require('../models');

const searchByPassword = (password) => User.findOne({ where: { password } });

const searchByEmail = (email) => User.findOne({ where: { email } });

const createUser = (userData) => User.create(userData);

module.exports = {
  searchByPassword,
  searchByEmail,
  createUser,
};
