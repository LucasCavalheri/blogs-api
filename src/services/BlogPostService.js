const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const getAllPostsWithUserAndCategory = async () => 
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

const createBlogPost = async ({ title, content, userId, categoryIds }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const blogPostCreated = await BlogPost.create(
        { title, content, userId, published: new Date(), updated: new Date() },
        { transaction: t },
      );

      const postId = blogPostCreated.id;

      const createPostCategory = await categoryIds.map(async (categoryId) =>
        PostCategory.create({ categoryId, postId }, { transaction: t }));

      await Promise.all(createPostCategory);

      return blogPostCreated;
    });

    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllPostsWithUserAndCategory,
  createBlogPost,
};
