const validatePassword = (req, res, next) => {
  try {
    const { password } = req.body;
    if (password.length < 6) {
      return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validatePassword;