const User = require("../models/user");

const validateUser = (username, password) => {
  return User.findOne({ username: username, password: password });
};

module.exports = { validateUser };
