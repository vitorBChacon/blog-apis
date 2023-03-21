const { postService } = require('../services');

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

module.exports = {
  createPost,
};