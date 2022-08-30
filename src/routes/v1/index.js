const express = require("express");
const { getImageUrls } = require("../../services/getImageUrls");
const { submitUrl } = require("../../services/submitUrl");
const router = express.Router();

router
  .get("/", (req, res, next) => {
    getImageUrls().then((result) => res.send(result).end());
  })
  .post("/", (req, res) => {
    submitUrl(req.body.name, req.body.url).then((result) =>
      res.send(result).end()
    );
  });

module.exports = router;
