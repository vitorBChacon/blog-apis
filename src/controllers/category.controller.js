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

const getCategories = async (_req, res) => {
  try {
    const categoriesData = await categoryService.getAll();

    if (!categoriesData) throw Error;

    const categories = [];

    categoriesData.forEach((element) => {
      categories.push(element.dataValues);
    });

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
};