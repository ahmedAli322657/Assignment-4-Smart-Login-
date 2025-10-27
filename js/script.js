// Signin inputs
var userNameSi = document.querySelector("#userNameSi");
var userEmailSi = document.querySelector("#userEmailSi");
var userPasswordSi = document.querySelector("#userPasswordSi");
// Signin inputs

// Login inputs
var userEmailLi = document.querySelector("#userEmailLi");
var userPasswordLi = document.querySelector("#userPasswordLi");
// Login inputs

// Buttons
var SignUpBtn = document.querySelector("#SignUpBtn");
var LoginBtn = document.querySelector("#LoginBtn");
var logOutBtn = document.querySelector("#logOutBtn")
// Buttons

var worng = document.querySelector(".wrong");
var right = document.querySelector(".right");
var taken = document.querySelector(".taken");
var loginWrong = document.querySelector(".loginWrong")

//Sections
var signUpSec = document.querySelector("#signUpSec");
var loginSec = document.querySelector("#loginSec");
var homeSec = document.querySelector("#homeSec");
//Sections

var signInAnchor = document.querySelector("#signInAnchor");
var signUpAnchor = document.querySelector("#signUpAnchor");
var form = document.querySelectorAll("form");
var WelcomeMsg = document.querySelector("#WelcomeMsg");
var userData = [];
if (localStorage.getItem("userInfo") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userInfo"));
}

signInAnchor.addEventListener("click", function (e) {
  e.preventDefault();
  signUpSec.classList.add("d-none");
  loginSec.classList.remove("d-none");
});

for (var i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

function addUserData() {
  if (
    validateName() == true &&
    validateEmail() == true &&
    validatepassword() == true
  ) {
    var data = {
      name: userNameSi.value,
      email: userEmailSi.value,
      password: userPasswordSi.value,
    };
    userData.push(data);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    userNameSi.classList.remove("is-valid");
    userNameSi.classList.remove("is-invalid");
    userEmailSi.classList.remove("is-valid");
    userEmailSi.classList.remove("is-invalid");
    userPasswordSi.classList.remove("is-valid");
    userPasswordSi.classList.remove("is-invalid");
    right.classList.remove("d-none");
    worng.classList.add("d-none");
    clearData();
  } else {
    worng.classList.remove("d-none");
    right.classList.add("d-none");
  }
}
SignUpBtn.addEventListener("click", addUserData);

function validateName() {
  var nameRegax = /^[A-Za-z]{3,20}$/;
  if (nameRegax.test(userNameSi.value) == true) {
    userNameSi.classList.add("is-valid");
    userNameSi.classList.remove("is-invalid");
    return true;
  } else {
    userNameSi.classList.remove("is-valid");
    userNameSi.classList.add("is-invalid");
    return false;
  }
}

userNameSi.addEventListener("blur", validateName);

function validateEmail() {
  var emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  if (emailRegax.test(userEmailSi.value) == true) {
    userEmailSi.classList.add("is-valid");
    userEmailSi.classList.remove("is-invalid");
    return true;
  } else {
    userEmailSi.classList.remove("is-valid");
    userEmailSi.classList.add("is-invalid");
    return false;
  }
}
userEmailSi.addEventListener("blur", validateEmail);

function validatepassword() {
  var passRegax = /^.{8,}$/;
  if (passRegax.test(userPasswordSi.value) == true) {
    userPasswordSi.classList.add("is-valid");
    userPasswordSi.classList.remove("is-invalid");
    return true;
  } else {
    userPasswordSi.classList.remove("is-valid");
    userPasswordSi.classList.add("is-invalid");
    return false;
  }
}
userPasswordSi.addEventListener("blur", validatepassword);

function clearData() {
  userNameSi.value = "";
  userPasswordSi.value = "";
  userEmailSi.value = "";
}
function clearLoginData() {
  userPasswordLi.value = "";
}

function logIn() {
  for (var i = 0; i < userData.length; i++) {
    if (
      JSON.parse(localStorage.getItem("userInfo"))[i].email ==
        userEmailLi.value &&
      JSON.parse(localStorage.getItem("userInfo"))[i].password ==
        userPasswordLi.value
    ) {
      console.log("login");
      homeSec.classList.remove("d-none");
      loginSec.classList.add("d-none");
      loginWrong.classList.add("d-none")
      WelcomeMsg.innerHTML = `Welcome ${userData[i].name}`;
    } else {
      loginWrong.classList.remove("d-none")
    }
  }
}
LoginBtn.addEventListener("click", logIn);
logOutBtn.addEventListener("click" , function () {
  homeSec.classList.add("d-none")
  loginSec.classList.remove("d-none")
  signUpSec.classList.add("d-none")
  clearLoginData()
})
