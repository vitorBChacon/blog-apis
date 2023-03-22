const express = require('express');

const { postController } = require('../controllers');
const validateValues = require('../middlewares/validatatePostControllerValues');
const validateCategoriesId = require('../middlewares/validateCategoryId');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateValues, validateCategoriesId, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);

module.exports = router;