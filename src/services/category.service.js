const { category } = require('../models');

const createCategory = ({ name }) => category.create({ name });

module.exports = {
  createCategory,
};