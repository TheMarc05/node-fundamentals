const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send("Welcome to my Node API");
});

module.exports = router;
