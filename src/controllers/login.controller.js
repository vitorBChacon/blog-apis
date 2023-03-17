const { createToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const verifyRequisitionBody = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!verifyRequisitionBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    console.log(email);
    const user = await userService.getByEmail(email);
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
  login,
};