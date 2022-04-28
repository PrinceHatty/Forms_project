const express = require("express");
const Nanoid = require("nanoid");
const fs = require("fs");

// let rawdata = fs.readFileSync("student-2.json");
// let users = JSON.parse(rawdata);
// let user_data = JSON.stringify(users);

// const file_writing_user_data = require("./User_data/forms.json");

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
  let data1 = JSON.stringify(req.body);
  fs.readFile("student-2.json", function (err, data) {
    var json = JSON.parse("forms" + data);
    json.push(data1);
    fs.writeFile("student-2.json", JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });
  res.end();
});

//creating routes for viewing the form
app.get("/:owner/d/:formid/view", (req, res) => {
  // https://6scc2h-2000.sse.codesandbox.io/;asjnacpqwjpcsdjc/d/mwaOa759cATPXB0WCDLna/view

  let data = "";

  // console.log(rawdata + "Raw data");

  // console.log(users + "Users");
  // console.log(user_data + "User_Data");
  function hasValueDeep(json, findValue) {
    const values = Object.values(json);
    let hasValue = values.includes(findValue);
    values.forEach(function (value) {
      if (typeof value === "object") {
        hasValue = hasValue || hasValueDeep(value, findValue);
      }
    });
    return hasValue;
  }
  console.log(hasValueDeep(users, req.params.formid));
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
