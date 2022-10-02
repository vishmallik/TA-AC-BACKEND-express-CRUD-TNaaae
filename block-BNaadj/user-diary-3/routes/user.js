const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res, next) => {
  User.find({}, (err, userList) => {
    if (err) return next(err);
    res.render("users", { userList });
  });
});

router.get("/new", (req, res, next) => {
  res.render("newUserForm");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, newUser) => {
    if (err) return next(err);
    res.redirect("/users");
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
    res.render("editForm", { user });
  });
});

router.post("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect("/users/" + id);
  });
});

router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
