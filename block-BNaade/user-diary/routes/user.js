const express = require("express");
const router = express.Router();
const User = require("../models/User");

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

router.get("/", (req, res, next) => {
  User.find({}, (err, usersList) => {
    if (err) return next(err);
    res.render("users", { usersList });
  });
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

router.get("/:id/edit", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("updateUser", { user });
  });
});

router.post("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
