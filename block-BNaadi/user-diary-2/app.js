//requires
const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

//connect to db
mongoose.connect("mongodb://127.0.0.1", (err) => {
  console.log(err ? err : "Connected to Database");
});

//Instantiating the app
const app = express();

//Middlewares
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

//Setting up view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Routers
app.use("/", indexRouter);
app.use("/users", userRouter);

//error handlers
//404 error
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

//custom error
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

//listener
app.listen(4000, () => {
  console.log("server listening on port 4000");
});
