const { createToken } = require('../auth/jwt');
const UserService = require('../services/UserService');

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
};
