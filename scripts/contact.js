// Contact Form
let submitForm = document.querySelector(".submit-form");

let inputs = document.querySelectorAll(".submit-form input");

// Regex object
let regexInfo = {
  name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
  email:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  age: /^(1[1-9]|[2-9][0-9]|[1-9][0-9]{2,})$/,
  password: /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{6,}$/,
  rePassword: /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{6,}$/,
};

function validate(input, pattern) {
  const regex = new RegExp(pattern);
  return regex.test(input);
}

function validateInput(inputField, pattern, errMsg) {
  inputField.addEventListener("blur", () => {
    if (!validate(inputField.value, pattern)) {
      inputField.nextElementSibling.textContent = errMsg;
      inputField.nextElementSibling.classList.remove("hidden");
    } else {
      inputField.nextElementSibling.classList.add("hidden");
    }
  });
}

function validateAll() {
  let isValid = true;
  inputs.forEach((input) => {
    let filed = input;
    let regixKey = filed.name;
    if (!validate(filed.value, regexInfo[regixKey])) {
      isValid = false;
    }
  });
  if (isValid) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("cursor-not-allowed");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("cursor-not-allowed");
  }
}

function initApp() {
  if (submitForm) {
    let inputName = submitForm.name;
    let inputEmail = submitForm.email;
    let inputPhone = submitForm.phone;
    let inputAge = submitForm.age;
    let inputPassword = submitForm.password;
    let inputRePassword = submitForm.rePassword;
    let submitBtn = submitForm.submitBtn;
    //validate Name
    validateInput(inputName, regexInfo.name, "Enter A valid Name");
    // Validate Email
    validateInput(inputEmail, regexInfo.email, "Enter A valid Email Address");
    //   Validate Phone
    validateInput(inputPhone, regexInfo.phone, "Enter A valid Phone");
    //   Validate Age
    validateInput(inputAge, regexInfo.age, "Age should be more than 10 ");
    //   Validate Password
    validateInput(
      inputPassword,
      regexInfo.password,
      "Password should be 6 chars",
    );
    //   Validate RePassword
    inputRePassword.addEventListener("blur", () => {
      if (
        inputRePassword.value !== "" &&
        inputRePassword.value !== inputPassword.value
      ) {
        inputRePassword.nextElementSibling.textContent = `Password Doesn't Match`;
        inputRePassword.nextElementSibling.classList.remove("hidden");
      } else {
        inputRePassword.nextElementSibling.classList.add("hidden");
      }
    });
    //   Check if all Valid To Remove Disabled from Btn
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        validateAll();
      });
    });
    submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
}
export default { initApp };
