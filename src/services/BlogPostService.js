const { BlogPost, PostCategory, sequelize } = require('../models');

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
  createBlogPost,
};
