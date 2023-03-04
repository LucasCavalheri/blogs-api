const Joi = require('joi');

const validateCreateCategoryBody = (body) => 
  Joi.object({
    name: Joi.string().required().messages({
      'string.required': '"name" is required',
    }),
  }).validate(body);

const validateCreateCategory = async (req, res, next) => {
  const { error } = validateCreateCategoryBody(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validateCreateCategory };