const express = require("express");
const app = express();

const users = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/create", (req, res) => {
  res.render("addUserForm.ejs");
});

app.post("/addUser", (req, res) => {
  users.push(req.body);
  res.json(req.body);
});

app.get("/getUsers", (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log("Server Listening on port 3000..."));
