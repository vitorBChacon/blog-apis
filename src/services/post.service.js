const { BlogPost, PostCategory } = require('../models');

const create = ({ title, content, userId, published, updated }) => 
  BlogPost.create({ title, content, userId, published, updated });

const createPostCategories = (list) => PostCategory.bulkCreate(list);

module.exports = {
  create,
  createPostCategories,
};