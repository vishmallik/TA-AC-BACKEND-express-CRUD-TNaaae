const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users", { users: ["Ram", "Shyam", "Rahul", "Jay", "Ravi"] });
});

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.get("/:id", (req, res) => {
  res.render("singleUser", {
    user: {
      name: "Ravi",
      age: 25,
      email: "ravi@gmail.com",
    },
  });
});

router.post("/", (req, res) => {
  res.send(req.body);
});

router.delete("/:id", (req, res) => {
  res.send("User Deleted");
});

router.put("/:id", (req, res) => {
  res.send("user updated");
});

module.exports = router;
