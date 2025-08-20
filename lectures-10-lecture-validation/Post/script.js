// Переменные
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat');
const email = document.querySelector('#email');
const username = document.querySelector('#username');

const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
// Слушатели
username.addEventListener('input', handleValidate);
email.addEventListener('input', handleValidate);
password.addEventListener('input', handleValidate);
passwordRepeat.addEventListener('input', handleValidate);

const ERRORS = {
  passwordRepeat: 'Пароли должны совпадать'
}

// email.addEventListener('focus', handleValidate);

submit.addEventListener('click', sendForm);
// Функции-обработчики

function handleValidate(event) {

  isValid(event.target);
}

function activateError(element, errorText) {
  element.parentNode.classList.add('input-container__invalid');
  element.textContent = errorText;
}

function resetError (element) {
  element.parentNode.classList.remove('input-container__invalid');
  element.textContent = '';
}

function isPasswordMatch(element) {
  if (element.id !== password.id && element.id !== passwordRepeat.id) {
    return true;
  }

  if (password.value === passwordRepeat.value) {
    resetError(password);
    resetError(passwordRepeat);
    return true;
  }

  return false;
}

function isValid(element) {
  const errorElement = document.getElementById(`error-${element.id}`);
  resetError(errorElement);

  if (!element.checkValidity()) {
    activateError(errorElement, element.validationMessage);
    return false;
  } else if (!isPasswordMatch(element)) {
    activateError(errorElement, ERRORS.passwordRepeat);
    return false;
  }

  return true;
}

function sendForm(event) {
  event.preventDefault();
  
  const inputs = Array.from(form.elements);

  let isValidForm = true;
  inputs.forEach((elem) => {
    if (elem.id !== submit.id) {
      if (!isValid(elem)) isValidForm = false;
    }
  });

  if (isValidForm) {
    console.log('Success!');
  } else {
    console.log('Form is still not validated =(');
  }
}