const { categoryService } = require('../services');

const validateCategoriesId = async (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    const categoriesList = await categoryService.getAll();
    const flag = categoriesList.every((element) => categoryIds.includes(element.dataValues.id));
    if (!flag) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: error.message,
    });
  }
};

module.exports = validateCategoriesId;