const { BlogPost, PostCategory } = require('../models');

const create = ({ title, content, userId, published, updated }) => 
  BlogPost.create({ title, content, userId, published, updated });

const createPostCategories = (list) => PostCategory.bulkCreate(list);

const getAll = () => BlogPost.findAll();

const getById = (id) => BlogPost.findOne({ where: { id } });

const updatePost = (title, content, id) => BlogPost.update({ title, content }, { where: { id } });

module.exports = {
  create,
  createPostCategories,
  getAll,
  getById,
  updatePost,
};