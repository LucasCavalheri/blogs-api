const { createToken } = require('../auth/jwt');
const UserService = require('../services/UserService');

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const userData = req.body;

  const emailExists = await UserService.searchByEmail(userData.email);

  console.log(emailExists);

  if (emailExists) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const newUser = await UserService.createUser(userData);

  const token = createToken(newUser);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
  getAllUsers,
};
