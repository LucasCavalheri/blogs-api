const UserService = require('../services/UserService');
const { createToken } = require('../auth/jwt');

const login = async (req, res) => {
  const { email, password } = req.body;

  const passwordExists = await UserService.searchByPassword(password);
  const emailExists = await UserService.searchByEmail(email);

  if (!passwordExists || !emailExists) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = createToken(emailExists);

  return res.status(200).json({ token });
};

module.exports = { login };
