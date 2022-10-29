function editNav() {
  const responsiveNav = document.getElementById("idNav");
  if (responsiveNav.className === "nav") {
    responsiveNav.className += " responsive";
  } else {
    responsiveNav.className = "nav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalBg.style.display = "none";
}

// regex
regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
regexNumber = "([0-9])";
regexBirthdate=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i;


// 3.0 ERROR MESSAGE
const firstNameErrMsg = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastNameErrMsg = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailErrMsg = "Veuillez saisir un email valide.";
const birthdateErrMsg = "Vous devez entrer votre date de naissance.";
const tournamentsErrMsg = "Veuillez saisir un chiffre.";
const locationErrMsg = "Vous devez choisir une option.";
const cguErrorMsg = "Vous devez vérifier que vous acceptez les termes et conditions.";

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

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
  mailInput.addEventListener('input', mailKeyPress);

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
    const isFormValid = isFirstNameValid && isLastNameValid && isMailValid && isBirthdateValid && isTournamentsValid && isCguValid
    if (isFormValid) {
      // 4 SUBMIT ANSWER
      alert("Merci ! Votre réservation a été reçue.");
    } else {
      event.preventDefault();
      alert("Validation non conforme.");
    }
  }
