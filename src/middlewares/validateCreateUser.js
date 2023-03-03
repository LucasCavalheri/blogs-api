const Joi = require('joi');

const validateCreateUserBody = (body) =>
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().optional(),
  }).validate(body);

const validateCreateUser = async (req, res, next) => {
  const { error } = validateCreateUserBody(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validateCreateUser };
