const validateDisplayName = (req, res, next) => {
  try {
    const { email } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validateDisplayName;
