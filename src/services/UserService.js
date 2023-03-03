const { User } = require('../models');

const searchByPassword = (password) => User.findOne({ where: { password } });

const searchByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  searchByPassword,
  searchByEmail,
};
