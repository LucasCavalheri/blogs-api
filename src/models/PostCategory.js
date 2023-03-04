/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    },
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      through: PostCategory,
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
      through: PostCategory,
    });
  };

  return PostCategory;
};
