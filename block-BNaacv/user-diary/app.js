const express = require("express");

const usersRouter = require("./routes/users");

//instantiation of app
const app = express();

//setting up engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//middlewares
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Users app");
});

//error handlers
app.use((req, res) => {
  res.status(404).send("Page not Found");
});

app.use((err, req, res) => {
  res.status(500).send(err);
});

//listener
app.listen(4000, () => {
  console.log("Server listening on port 4k");
});
