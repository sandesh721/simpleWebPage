window.onload = function () {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let pass = document.querySelector(".pass");
  let mbl = document.querySelector(".tel");
  let confim = document.querySelector(".conpass");

  name.addEventListener("blur", function () {
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
  mbl.addEventListener("blur", function () {
    let regex = /^[0-9]{10}$/;
    let user = mbl.value;
    if (regex.test(user)) {
      let usr = document.getElementById("tel");
      usr.textContent = "";
    } else {
      let usr = document.getElementById("tel");
      usr.textContent = "Mobile number should contains 10 numbers";
    }
  });
  email.addEventListener("blur", function () {
    let regex = /^([_\.\-0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{1,5})$/;
    let em = email.value;
    if (regex.test(em)) {
      let ems = document.getElementById("email");
      ems.textContent = "";
    } else {
      let ems = document.getElementById("email");
      ems.textContent = "email must be of the form eg:example.gmail.com";
    }
  });
  pass.addEventListener("blur", function () {
    
    let password = pass.value;

  
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

  confim.addEventListener("blur", function () {
    
   
   
    if (confim.value == pass.value) {
      document.getElementById("conpass").textContent = "";
    } else {
      document.getElementById("conpass").textContent =
        "Password does not matched";
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
    window.location.href = "submit.html";
    clear()
  } else {
    alert("Something went wrong");
  }
}
     
function clear() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".pass").value = "";
  document.querySelector(".conpass").value="";
   document.querySelector(".tel").value="";
  
}


