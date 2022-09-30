const express = require("express");
const path = require("path");

const studentRoute = require("./routes/students");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use("/students", studentRoute);

app.get("/", (req, res) => {
  res.render("index", { name: "visawjeet" });
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});
app.use((err, req, res, next) => {
  res.status(500).send(err);
});
app.listen(4000, () => {
  console.log("server listening on port 4000");
});
