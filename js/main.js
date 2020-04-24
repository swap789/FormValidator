const init = {
  _getElement: function (id) {
    return document.getElementById(id);
  },
  validator: {
    isEmpty: function (id) {
      const element = init._getElement(id);
      return element.value === "";
    },
    isEmail: function (id) {
      const element = init._getElement(id);
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        element.value
      );
    },
    isMinimumSixChar: function (id) {
      const element = init._getElement(id);
      return element.value.length <= 6;
    },
    isPasswordMatch: function (passId, id) {
      const password = init._getElement(id);
      const confirmPassword = init._getElement(id);
      return password.value !== confirmPassword.value;
    },
  },
  fieldValidator: {
    validateUserName: function (id) {
      return init.validator.isEmpty(id);
    },
    validateEmail: function (id) {
      if (init.validator.isEmpty(id)) {
        return true;
      } else if (init.validator.isEmail(id)) {
        return true;
      }
    },
    validatePassword: function (id) {
      return init.validator.isMinimumSixChar(id);
    },
    confirmPassword: function (passId, id) {
      return init.validator.isPasswordMatch(passId, id);
    },
  },
  messages: {
    showErrorMessage: function (textFieldId, id, message) {
      const pElement = document.createElement("p");
      pElement.setAttribute("id", id + "Error");
      if (!document.getElementById(id + "Error")) {
        const textNode = document.createTextNode(message);
        document.getElementById(textFieldId).classList.add("red-border");
        pElement.append(textNode);
        document.getElementById(id).appendChild(pElement);
      }
    },
    removeErrorMessage: function (textFieldId, id) {
      const element = document.getElementById(id + "Error");
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        document.getElementById(textFieldId).classList.remove("red-border");
      }
    },
  },
};

const messages = {
  showErrorMessage: function (textFieldId, id, message) {
    const pElement = document.createElement("p");
    pElement.setAttribute("id", id + "Error");
    if (!document.getElementById(id + "Error")) {
      const textNode = document.createTextNode(message);
      document.getElementById(textFieldId).classList.add("red-border");
      pElement.append(textNode);
      document.getElementById(id).appendChild(pElement);
    }
  },
  removeErrorMessage: function (textFieldId, id) {
    const element = document.getElementById(id + "Error");
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
      document.getElementById(textFieldId).classList.remove("red-border");
    }
  },
};

function showErrorMessage(textFieldId, id, message) {}

function removeErrorMessage(textFieldId, id) {}

function submit() {
  let result = true;
  if (fieldValidator.validateUserName("username")) {
    result = false;
    showErrorMessage("username", "usernameDiv", "Please Enter username");
  }
  if (fieldValidator.validateEmail("email")) {
    result = false;
    showErrorMessage("email", "emailDiv", "Please Enter valid email");
  }
  if (fieldValidator.validatePassword("password")) {
    result = false;
    showErrorMessage(
      "password",
      "passwordDiv",
      "Password length should be minimum 6 character"
    );
  }
  if (fieldValidator.confirmPassword("password", "confirmPassword")) {
    result = false;
    showErrorMessage(
      "confirmPassword",
      "confirmPasswordDiv",
      "Password should be same"
    );
  }

  if (result) {
    alert("Form submitted successfully");
  }
}

function init() {
  onKeyPress("username", "usernameDiv");
  onKeyPress("email", "emailDiv");
  onKeyPress("password", "passwordDiv");
  onKeyPress("confirmPassword", "confirmPasswordDiv");
}

function clear() {
  document.getElementById("username").setAttribute("value", "");
  document.getElementById("email").setAttribute("value", "");
  document.getElementById("password").setAttribute("value", "");
  document.getElementById("confirmPassword").setAttribute("value", "");
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
