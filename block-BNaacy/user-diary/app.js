//requires
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const indexRouter = require("./routes/index");

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/users", (err) => {
  console.log(err ? err : "Connected to database");
});

//Instantiation of app
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Routers
app.use("/", indexRouter);
app.use("/users", userRouter);

//error handlers
//404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

//custom error handler
app.use((err, req, res) => {
  res.status(500).send(err);
});

//listeners
app.listen(4000, () => {
  console.log("server listening on port 4k");
});
