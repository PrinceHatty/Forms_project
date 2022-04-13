// form_name
// save
// form_title
// form_description
// Question-1
// question-1_radio1
// question-1_radio1_text
// Question-2
// question-2_radio1
// question-2_radio1_text

// start here > >
const form = {
  save_btn: document.getElementsByName("save")[0],
  form_name: document.getElementsByClassName("form_name"),
  form_title: document.getElementsByClassName("form_title"),
  form_description: document.getElementsByClassName("form_description"),
  Question1: document.getElementsByClassName("Question-1"),
  question1_radio1_text: document.getElementsByClassName(
    "question-1_radio1_text"
  ),
  Question2: document.getElementsByClassName("Question-2"),
  question2_radio1_text: document.getElementsByClassName(
    " question-2_radio1_text"
  )
};

const request = new XMLHttpRequest();
// const formdata = new FormData();

form.save_btn.addEventListener("click", () => {
  console.log(form);
  console.log("save clicked");
  request.onload = () => {
    console.log("onload event");
  };
  request.open("post", "/form_save");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  const form_data = {
    form_name: form.form_name.value,
    form_title: form.form_title.value,
    " form_description": form.form_description.value
  };

  request.send(form_data);
});

// <=== end here ===>
