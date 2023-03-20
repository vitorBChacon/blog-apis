const { userService } = require('../services');

const validateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);
    if (user) {
      return res.status(409)
        .json({ message: 'User already registered' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validateUser;