const { createToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createUser({
      displayName,
      email,
      password,
      image,
    });
    if (!user || password !== user.password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const { password: _, ...userMinusPassword } = user.dataValues;
    const token = createToken(userMinusPassword);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
};