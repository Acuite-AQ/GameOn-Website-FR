function editNav() {
  const responsiveNav = document.getElementById("myTopnav");
  if (responsiveNav.className === "topnav") {
    responsiveNav.className += " responsive";
  } else {
    responsiveNav.className = "topnav";
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
  modalbg.style.display = "none";
}

// regex
regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
regexDate = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/i;
regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i;
regexNumber = "([0-9])";

// 3.0 ERROR MESSAGE
const firstNameErrMsg = "Le prénom doit être composé d'au moins 2 caractères";
const lastNameErrMsg = "Le nom doit être composé d'au moins 2 caractères";
const emailErrMsg = "L'email n'est pas valide";
const birthdateErrMsg = "La date de naissance n'est pas valide";
const tournamentsErrMsg = "Veuillez inscrire un chiffre";
const locationErrMsg = "Veuillez sélectionner au moins un lieu";
const cguErrorMsg = "Vous devez accepter les CGU";

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // document.querySelector('#btn-submit').disabled = true;

  // 2.1 FIRST NAME
  const firstNameInput = document.getElementById("first");
  let isFirstNameValid = false;
  firstNameInput.addEventListener('input', firstNameKeyPress);

  function firstNameKeyPress(event) {
    let firstNameError = document.getElementById("firstNameError");
    if (event.target.value.length >= 2) {
      firstNameError.innerHTML = "";
      isFirstNameValid = true;
    } else {
      firstNameError.innerHTML = firstNameErrMsg;
      isFirstNameValid = false;
    }
  }

  // 2.2 LAST NAME
  const lastNameInput = document.getElementById("last");
  let isLastNameValid = false;
  lastNameInput.addEventListener('input', lastNameKeyPress);

  function lastNameKeyPress(event) {
    let lastNameError = document.getElementById("lastNameError");
    if (event.target.value.length >= 2) {
      lastNameError.innerHTML = "";
      isLastNameValid = true;
    } else {
      lastNameError.innerHTML = lastNameErrMsg;
      isLastNameValid = false;
    }
  }

  // 2.3 E-MAIL
  const mailInput = document.getElementById("email");
  let isMailValid = false;
  mailInput.addEventListener('keyup', mailKeyPress);

  function mailKeyPress(event) {
    let mailNameError = document.getElementById("mailNameError");
    if (event.target.value.match(regexMail)) {
      mailNameError.innerHTML = "";
      isMailValid = true;
    } else {
      mailNameError.innerHTML = emailErrMsg;
      isMailValid = false;
    }
  }

  // 2.4 DATE
  const birthdateInput = document.getElementById("birthdate");
  let isBirthdateValid = false;
  birthdateInput.addEventListener('input', birthdateKeyPress);

  function birthdateKeyPress(event) {
    let birthdateError = document.getElementById("birthdateError")
    if (event.target.value.match(regexBirthdate)) {
      birthdateError.innerHTML = "";
      isBirthdateValid = true;
    } else {
      birthdateError.innerHTML = birthdateErrMsg;
      isBirthdateValid = false;
    }
  }

  // 2.5 TOURNAMENTS
  const tournamentsQtyInput = document.getElementById("quantity");
  let isTournamentsValid = false;
  tournamentsQtyInput.addEventListener('input', tournamentsKeyPress);

  function tournamentsKeyPress(event) {
    let tournamentsError = document.getElementById("tournamentsError");
    if (event.target.value.match(regexNumber)) {
      tournamentsError.innerHTML = "";
      isTournamentsValid = true;
    } else {
      tournamentsError.innerHTML = tournamentsErrMsg;
      isTournamentsValid = false;
    }
  }

  // 2.6 RADIO BUTTONS
  // document.querySelector('input[name="location"]:checked').value;

  // 2.7 CGU //Nommage checkbox1
  const cguChecked = document.getElementById('checkbox1');
  let isCguValid = false;
  cguChecked.addEventListener('click', cguCheckBox);

  function cguCheckBox(event) {
    let cguError = document.getElementById("cguError");
    if (event.target.checked == true) {
      cguError.innerHTML = "";
      isCguValid = true;
    } else {
      cguError.innerHTML = cguErrorMsg;
      isCguValid = false;
    }
  }

  // 2.8 FINAL SUBMIT
  const validateForm = document.getElementById("btn-submit");
  validateForm.addEventListener('click', validationForm);

  function validationForm(event) {
    const isFormValid = isFirstNameValid && isLastNameValid && isMailValid  && isTournamentsValid && isCguValid
    if (isFormValid) {
      // 4 SUBMIT ANSWER
      alert("Merci ! Votre réservation a été reçue.");
    } else {
      event.preventDefault();
      alert("Validation non conforme.");
    }
  }
}