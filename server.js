const express = require("express");
const Nanoid = require("nanoid");
const fs = require("fs");

console.log(`UUID with Nano ID sync: ${Nanoid.nanoid()}`);

const app = express();
app.use(express.urlencoded());

// view engine
app.set("view engine", "ejs");
// end view engine

// setting up public directory
app.use(express.static("public"));
// end setting up public dirctory

app.get("/", (req, res) => {
  res.render("index", { name: "Prince hatty" });
});

// creating the routes for saving the form

app.get("/form_save", (req, res) => {
  res.redirect("/new");
});
app.post("/form_save", (req, res) => {
  console.log(req.body);
});

// creating the form
app.get("/new", (req, res) => {
  res.render("create", { name: "Prince hatty" });
});

// end  creating the form

app.listen(2000, () => {
  console.log("listing on 2000");
});
