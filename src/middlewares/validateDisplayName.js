const validateDisplayName = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
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
