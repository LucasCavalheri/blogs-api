const validateLoginBody = (email, password) => email && password;

const isBodyValid = (req, res, next) => {
  const { email, password } = req.body;

  if (!validateLoginBody(email, password)) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = { isBodyValid };
