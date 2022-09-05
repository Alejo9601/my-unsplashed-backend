const express = require("express");
const { validateUser } = require("../../services/validateUser");
const loginRoutes = express.Router();

loginRoutes.post("/", (req, res, next) => {
  const user = req.body;
  console.log(user);
  validateUser(user.username, user.password).then((result) =>
    res.send(result).end()
  );
});

module.exports = loginRoutes;
