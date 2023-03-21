const validateValues = (req, res, next) => {
  try {
    const { title, content, categoriesId } = req.body;
    if (!title || !content || categoriesId) {
      return res.status(400)
        .json({ message: 'Some required fields are missing' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validateValues;