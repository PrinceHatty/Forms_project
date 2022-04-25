const express = require("express");
const Nanoid = require("nanoid");
const fs = require("fs");

let rawdata = fs.readFileSync("student-2.json");
let users = JSON.parse(rawdata);

// const file_writing_user_data = require("./User_data/forms.json");

console.log(`UUID with Nano ID sync: ${Nanoid.nanoid()}`);

const app = express();
app.use(express.urlencoded());
app.use(express.json());
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
  req.body.form_id = Nanoid.nanoid();
  let data = JSON.stringify(req.body);
  fs.writeFileSync("student-2.json", data);
  console.log(req.body);
  res.end();
});

//creating routes for viewing the form
app.get("/:owner/d/:formid/view", (req, res) => {
  let data = "";

  for (let i = 0; i < users.length; i++) {
    if (users[i].form_owner_id === req.params.owner) {
      if (users[i].form_id === req.params.owner) {
        console.log("found!");
        data += users[i];
      }
    }
  }
  res.render("view-from.ejs", {
    form_owner: req.params.owner,
    form_id: req.params.formid,
    data: data
  });
});

// creating the form
app.get("/new", (req, res) => {
  res.render("create", { name: "Prince hatty" });
});

// end  creating the form

app.listen(2000, () => {
  console.log("listing on 2000");
});
