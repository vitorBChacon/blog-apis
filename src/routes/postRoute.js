const express = require('express');

const { postController } = require('../controllers');
const validateValues = require('../middlewares/validatatePostControllerValues');
const validateCategoriesId = require('../middlewares/validateCategoryId');
const validateOwnership = require('../middlewares/validateOwnership');
const validatePostExistence = require('../middlewares/validatePostExistence');
const validatePutFieldValues = require('../middlewares/validatePutFieldValues');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateValues, validateCategoriesId, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostById);
router.put(
  '/:id',
  validateToken,
  validatePutFieldValues,
  validateOwnership,
  postController.updatePost,
  postController.getPostById,
);
router.delete(
  '/:id', validateToken,
  validatePostExistence,
  validateOwnership,
  postController.deletePost,
);

module.exports = router;