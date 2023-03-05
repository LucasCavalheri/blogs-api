const { createToken } = require('../auth/jwt');
const UserService = require('../services/UserService');

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await UserService.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
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

const deleteUser = async (req, res) => {
  const { id } = req.payload.payload;

  await UserService.deleteUser(id);

  return res.status(204).end();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};
