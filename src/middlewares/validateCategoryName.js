const validateDisplayName = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400)
        .json({ message: '"name" is required' });
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