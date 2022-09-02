const express = require("express");
const { createUser } = require("../../services/createUser");
const { validateUser } = require("../../services/validateUser");
const userRoutes = express.Router();

userRoutes
  .post("/", (req, res, next) => {
    const user = req.body;
    createUser(user.username, user.password).then((result) =>
      res.send(result).end()
    );
  })
  .get("/login", (req, res, next) => {
    const user = req.body;
    validateUser(user.username, user.password).then((result) =>
      result ? res.send(true) : res.send(false)
    );
  });

module.exports = userRoutes;
