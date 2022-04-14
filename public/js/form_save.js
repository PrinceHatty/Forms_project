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
  form_name: document.getElementsByName("form_name")[0],
  form_title: document.getElementsByName("form_title")[0],
  form_description: document.getElementsByName("form_description")[0],
  Question1: document.getElementsByName("Question-1")[0],
  question1_radio1_text: document.getElementsByName(
    "question-1_radio1_text"
  )[0],
  Question2: document.getElementsByName("Question-2")[0],
  question2_radio1_text: document.getElementsByName(
    " question-2_radio1_text"
  )[0],
  botton_left_alert: document.getElementById("botton_left-alert")
};

const request = new XMLHttpRequest();
// const formdata = new FormData();

form.save_btn.addEventListener("click", () => {
  form.botton_left_alert.style.visibility = "visible";
  form.botton_left_alert.innerHTML = "Saving....";
  console.log(form);
  console.log("save clicked");
  request.onload = () => {
    form.botton_left_alert.innerHTML = "Form Saved Scussfully.";

    console.log("onload event");
  };
  request.open("post", "/form_save");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  const form_data = `form_name: ${form.form_name.value},form_title: ${form.form_title.value},form_description: ${form.form_description.value}&,Question1 :${form.Question1.value}& Question_opion_text:${form.question1_radio1_text.value}`;

  console.log(form_data);
  request.send(form_data);
});

// <=== end here ===>
