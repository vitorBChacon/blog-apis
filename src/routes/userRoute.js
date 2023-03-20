const express = require('express');

const { userController } = require('../controllers');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
  userController.createUser);

module.exports = router;