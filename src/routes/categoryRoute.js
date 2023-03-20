const express = require('express');

const { categoryController } = require('../controllers');

const validateToken = require('../middlewares/validateToken');
const validateCategoryName = require('../middlewares/validateCategoryName');

const router = express.Router();

router.post('/', validateToken, validateCategoryName, categoryController.createCategory);

module.exports = router;