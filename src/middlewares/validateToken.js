const { verifyToken } = require('../auth/jwt');

const validateToken = (req, res, next) => {
  try {
    const { Authorization } = req.headers;

    if (!Authorization) {
      return res.status(401).json({ message: 'Token não enviado' });
    }

    const payload = verifyToken(Authorization);

    req.payload = payload.data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
