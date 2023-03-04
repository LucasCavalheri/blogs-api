const {
  BlogPost,
  PostCategory,
  User,
  Category,
  sequelize,
} = require('../models');

const getAllPostsWithUserAndCategory = async () =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

const getUniquePostWithUserAndCategory = async (id) =>
  BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

const searchPostByUserId = async (userId) =>
  BlogPost.findOne({
    where: { userId },
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

const updatePost = async (id, { title, content }) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const getUpdatedPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return getUpdatedPost;
};

module.exports = {
  getAllPostsWithUserAndCategory,
  getUniquePostWithUserAndCategory,
  searchPostByUserId,
  createBlogPost,
  updatePost,
};
