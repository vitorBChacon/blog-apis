const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAll = () => Category.findAll();

module.exports = {
  createCategory,
  getAll,
};