const { postService, userService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.data;
    const post = await postService.create({ title,
    content,
    userId,
    published: new Date(),
    updated: new Date() });
    const addToPost = [];
    categoryIds.forEach((element) => {
      addToPost.push({ categoryId: element, postId: post.dataValues.id });
    });
    await postService.createPostCategories(addToPost);
    return res.status(201).json(post.dataValues);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const post = await postService.getAll();
    const finalPost = await Promise.all(post.map(async (e) => {
      const userData = await userService.getById(e.userId);
      const postWithUser = { ...e.dataValues, user: userData.dataValues };
      return postWithUser;
    }));
    return res.status(201).json(finalPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};