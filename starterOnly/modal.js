function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "hidden";
}

// regex
regexMail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
regexDate=/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
regexBirthdate=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
regexNumber="([0-9])"

// 3.0 ERROR MESSAGE
const firstNameErrMsg = "Le prénom doit être composé d'au moins 2 caractères"
const lastNameErrMsg = "Le nom doit être composé d'au moins 2 caractères"
const emailErrMsg = "L'email n'est pas valide"
const birthdateErrMsg = "La date de naissance n'est pas valide"
const tournamentsErrMsg = "Veuillez inscrire un chiffre"
const locationErrMsg = "Veuillez sélectionner au moins un lieu"
const CGUErrorMsg = "Vous devez accepter les CGU"

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // document.querySelector('#btn-submit').disabled = true;

// 2.1 FIRST NAME
const firstInput = document.getElementById("first");
let isFirstValid = false;
firstInput.addEventListener('input', firstKeyPress)

function firstKeyPress(event) {
  if (event.target.value.length >= 2) {
    let firstNameError = document.getElementById("firstNameError")
    firstNameError.innerHTML = "";
    isFirstValid = true;
  } else {
    let firstNameError = document.getElementById("firstNameError");
    firstNameError.innerHTML = firstNameErrMsg;
    isFirstValid = false;
  }
}

// 2.2 LAST NAME
const lastInput = document.getElementById("last");
let isLastValid = false;
lastInput.addEventListener('input', lastKeyPress)

function lastKeyPress(event) {
  if (event.target.value.length >= 2) {
    let lastNameError = document.getElementById("lastNameError")
    lastNameError.innerHTML = "";
    isLastValid = true;
  } else {
    let lastNameError = document.getElementById("lastNameError");
    lastNameError.innerHTML = lastNameErrMsg;
    isLastValid = false;
  }
}

// 2.3 E-MAIL
const mailInput = document.getElementById("email");
let isMailValid = false;
mailInput.addEventListener('keyup', mailKeyPress)

function mailKeyPress(event) {
  if (event.target.value.match(regexMail)) {
    let mailNameError = document.getElementById("mailNameError")
    mailNameError.innerHTML = "";
    isMailValid = true;
  } else {
    let mailNameError = document.getElementById("mailNameError");
    mailNameError.innerHTML = emailErrMsg;
    isMailValid = false;
  }
}

// 2.4 DATE
const birthdateInput = document.getElementById("birthdate");
let isBirthdateValid = false;
birthdateInput.addEventListener('input', birthdateKeyPress)

function birthdateKeyPress(event) {
  console.log(regexDate)
  if (event.target.value.match(regexBirthdate)) {
    let birthdateError = document.getElementById("birthdateError")
    birthdateError.innerHTML = "";
    isBirthdateValid = true;
  } else {
    let birthdateError = document.getElementById("birthdateError");
    birthdateError.innerHTML = birthdateErrMsg;
    isBirthdateValid = false;
  }
}

// 2.5 TOURNAMENTS
const tournamentsInput = document.getElementById("quantity");
let isTournamentsValid = false;
tournamentsInput.addEventListener('input', tournamentsKeyPress)

function tournamentsKeyPress(event) {
  if (event.target.value.match(regexNumber)) {
    let tournamentsError = document.getElementById("tournamentsError")
    tournamentsError.innerHTML = "";
    isTournamentsValid = true;
  } else {
    let tournamentsError = document.getElementById("tournamentsError");
    tournamentsError.innerHTML = tournamentsErrMsg;
    isTournamentsValid = false;
  }
}

// 2.6 RADIO BUTTONS
document.querySelector('input[name="location"]:checked').value;

// 2.7 CGU
const cguChecked = document.getElementById('checkbox1')
let iscguValid = false;
cguChecked.addEventListener('click', cguCheck)

function cguCheck(event) {
  if (event.target.checked == true) {
    let cguError = document.getElementById("cguError");
    cguError.innerHTML = "";
    iscguValid = true;
  } else {
    let cguError = document.getElementById("cguError");
    cguError.innerHTML = CGUErrorMsg;
    iscguValid = false;
  }
}

// 2.8 FINAL SUBMIT
const ValidateForm = document.getElementById("btn-submit")
ValidateForm.addEventListener('click', ValidationForm)

function ValidationForm(event) {
  if (isFirstValid, isLastValid, isMailValid, isBirthdateValid, isTournamentsValid, iscguValid == true) {
    // 4 SUBMIT ANSWER
    alert("Merci ! Votre réservation a été reçue.")
    console.log("Vous pouvez entrer")
  } else {
    event.preventDefault();
    alert("Validation non conforme.")
    console.log("Vous ne passerez pas")
  }
}
}