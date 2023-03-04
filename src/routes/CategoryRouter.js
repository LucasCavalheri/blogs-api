const express = require('express');

const CategoryController = require('../controllers/CategoryController');
const { validateToken } = require('../middlewares/validateToken');
const { validateCreateCategory } = require('../middlewares/validateCreateCategory');

const router = express.Router();

router.get('/', validateToken, CategoryController.getAllCategories);
router.post('/', validateToken, validateCreateCategory, CategoryController.createCategory);

module.exports = router;
