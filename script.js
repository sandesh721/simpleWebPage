window.onload = function () {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let pass = document.querySelector(".pass");

  name.addEventListener("blur", function namevalidate() {
    let regex = /^[0-9a-zA-Z]{1,15}$/;
    let user = name.value;
    if (regex.test(user)) {
      let usr = document.getElementById("name");
      usr.textContent = "";
    } else {
      let usr = document.getElementById("name");
      usr.textContent = "The name should only contain numbers and variables";
    }
  });
  email.addEventListener("blur", function emailvalidate() {
    let regex = /^([_\.\-0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{1,5})$/;
    let usr = email.value;
    if (regex.test(usr)) {
      let usr = document.getElementById("email");
      usr.textContent = "";
    } else {
      let usr = document.getElementById("email");
      usr.textContent = "email must be of the form eg:example@gmail.com";
    }
  });
  let passed = pass.addEventListener("blur", function passvalidate() {
    let password = pass.value;
    console.log(password.length);

    let cahr = /[a-zA-Z]+/;
    let num = /[0-9]/;
    let spct = /[~!@#\$%\^&\*\(\)\-\\_\=\+\;:\?,\.\{\}\[\]]+/;
    let pased = password.length;
    if (!cahr.test(password)) {
      let usr = document.getElementById("pass");
      usr.textContent = "password must contains at least one charaters ";
    } else if (!num.test(password)) {
      let usr = document.getElementById("pass");
      usr.textContent = "password must contains at least one numbers ";
    } else if (!spct.test(password)) {
      let usr = document.getElementById("pass");
      usr.textContent =
        "password must contains atr least one special characters";
    } else if (pased < 8) {
      let usr = document.getElementById("pass");
      usr.textContent = "password must cotain at least 8 charcter long";
    } else {
      let usr = document.getElementById("pass");
      usr.textContent = "";
    }
  });
};

function validate() {
  usr = document.getElementById("name");
  emails = document.getElementById("email");
  passs = document.getElementById("pass");
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let pass = document.querySelector(".pass").value;

  if (
    usr.textContent == "" &&
    name != "" &&
    emails.textContent == "" &&
    email != "" &&
    passs.textContent == "" &&
    pass != ""
  ) {
    clear();
    window.location.href = "submit.html";
  } else {
    alert("Something went wrong");
  }
}

function clear() {
  document.querySelector(".name").value= "";
  document.querySelector(".email").value = "";
  document.querySelector(".pass").value = "";

}
