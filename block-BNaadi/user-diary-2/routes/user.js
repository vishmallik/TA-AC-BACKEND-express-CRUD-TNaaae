const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

router.get("/", (req, res, next) => {
  User.find({}, (err, usersList) => {
    if (err) return next(err);
    res.render("listUsers", { usersList });
  });
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

router.put("/:id", (req, res, next) => {
  console.log(req.body, req.params.id, typeof req.params.id);
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    console.log(err, updatedUser);
    if (err) return next(err);
    res.redirect("/users/" + id);
  });
});

router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
