const { postService, userService, categoryService } = require('../services');

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
      const { password, ...user } = userData.dataValues;
      const categories = await categoryService.getAll();
      const postWithUser = { 
        ...e.dataValues,
        user,
        categories };
      return postWithUser;
    }));
    return res.status(200).json(finalPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    const userData = await userService.getById(post.userId);
    const { password, ...user } = userData.dataValues;
    const categories = await categoryService.getAll();
    const finalPost = { ...post.dataValues, user, categories };
    return res.status(200).json(finalPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};