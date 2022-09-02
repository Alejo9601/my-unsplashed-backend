const User = require("../models/user");

const createUser = (username, password) => {
  const newUser = new User({
    username: username,
    password: password,
  });
  return newUser.save();
};

module.exports = { createUser };
