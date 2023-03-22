const { postService } = require('../services');

const validateOwnership = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: currentUser } = req.data;
    const owner = await postService.getById(id);
    if (owner.dataValues.userId !== currentUser) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validateOwnership;