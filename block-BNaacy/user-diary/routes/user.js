const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.redirect("/users/new");
    }
    res.redirect("/");
  });
});
module.exports = router;
