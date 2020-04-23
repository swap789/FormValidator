const validator = {
  isEmpty: function (id) {
    const element = document.getElementById(id);
    return element.value === "";
  },
  isEmail: function (id) {
    const element = document.getElementById(id);
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value);
  },
  isMinimumSixChar: function (id) {
    const element = document.getElementById(id);
    return element.value.length <= 6;
  },
  isPasswordMatch: function (passId, id) {
    const password = document.getElementById(passId);
    const confirmPassword = document.getElementById(id);
    return password.value !== confirmPassword.value;
  },
};

const fieldValidator = {
  validateUserName: function (id) {
    if (validator.isEmpty(id)) {
      showErrorMessage("username", "usernameDiv", "Please Enter username");
    }
  },
  validateEmail: function (id) {
    if (validator.isEmpty(id)) {
      showErrorMessage("email", "emailDiv", "Please Enter Email");
    } else if (!validator.isEmail(id)) {
      showErrorMessage("email", "emailDiv", "Please Enter valid email");
    }
  },

  validatePassword: function (id) {
    if (validator.isMinimumSixChar(id)) {
      showErrorMessage(
        "password",
        "passwordDiv",
        "Password length should be minimum 6 character"
      );
    }
  },
  confirmPassword: function (passId, id) {
    if (validator.isPasswordMatch(passId, id)) {
      showErrorMessage(
        "confirmPassword",
        "confirmPasswordDiv",
        "Password should be same"
      );
    }
  },
};

function showErrorMessage(textFieldId, id, message) {
  const pElement = document.createElement("p");
  pElement.setAttribute("id", id + "Error");
  if (!document.getElementById(id + "Error")) {
    const textNode = document.createTextNode(message);
    document.getElementById(textFieldId).classList.add("red-border");
    pElement.append(textNode);
    document.getElementById(id).appendChild(pElement);
  }
}

function removeErrorMessage(textFieldId, id) {
  const element = document.getElementById(id + "Error");
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
    document.getElementById(textFieldId).classList.remove("red-border");
  }
}

function submit() {
  fieldValidator.validateUserName("username");
  fieldValidator.validateEmail("email");
  fieldValidator.validatePassword("password");
  fieldValidator.confirmPassword("password", "confirmPassword");
}

function init() {
  onKeyPress("username", "usernameDiv");
  onKeyPress("email", "emailDiv");
  onKeyPress("password", "passwordDiv");
  onKeyPress("confirmPassword", "confirmPasswordDiv");
}

function onKeyPress(textFieldId, divId) {
  document
    .getElementById(textFieldId)
    .addEventListener("keydown", function (e) {
      removeErrorMessage(textFieldId, divId);
    });
}

window.addEventListener("DOMContentLoaded", function () {
  init();
});
