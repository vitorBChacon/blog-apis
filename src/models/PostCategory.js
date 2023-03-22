'use strict';
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'blog_posts',
    });
  };
  return PostCategory
};