'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Post_categories', {
      post_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Blog_posts',
          key: 'id'
        },
        primaryKey: true
      },
      category_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        primaryKey: true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Post_categories');
  }
};