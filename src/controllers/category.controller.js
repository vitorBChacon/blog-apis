const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.createCategory({ name });
    return res.status(201).json(category.dataValues);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
};