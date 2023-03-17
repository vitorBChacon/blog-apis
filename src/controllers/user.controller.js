// const { userService } = require('../services');

const createUser = async (res, req) => {
  const { email } = req.body;
  return res.status(200).json({ email });
};

module.exports = {
  createUser,
};