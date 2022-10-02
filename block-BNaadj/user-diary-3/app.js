//Requires
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

//Connect to DB
mongoose.connect("mongodb://127.0.0.1/user-diary-3", (err) => {
  console.log(err ? err : "Connected to Database");
});

//Instantiation of app
const app = express();

//Middlewares

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(__dirname + "/public"));

//Setting up view Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Routers
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", userRouter);

//Error Handlers
//404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

//Custom error handler
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

//Listener
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
