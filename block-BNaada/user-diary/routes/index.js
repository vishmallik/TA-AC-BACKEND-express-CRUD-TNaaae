const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to users Index page");
});

module.exports = router;
