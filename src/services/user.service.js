const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => 
  User.create({ displayName, email, password, image });

const getByEmail = (email) => User.findOne({ where: { email } });

const getAll = () => User.findAll();

const getById = (id) => User.findOne({ where: { id } });

const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  getByEmail,
  getAll,
  getById,
  deleteUser,
};