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
    element.value.length >= 6;
  },

  isPasswordMatch: function () {
    const element = document.getElementById(id);
  },
};

const fieldValidator = {
  validateUserName: function (id) {
    if (validator.isEmpty(id)) {
      showErrorMessage("usernameDiv", "Please Enter username");
    }
  },
  validateEmail: function (id) {
    if (validator.isEmpty(id)) {
      showErrorMessage("emailDiv", "Please Enter Email");
      //removeErrorMessage("emailDiv");
    } else if (!validator.isEmail(id)) {
      showErrorMessage("emailDiv", "Please Enter valid email");
    }
  },

  validatePassword: function (id) {
    if (validator.isMinimumSixChar(id)) {
    } else if (validator.isPasswordMatch(id)) {
    }
  },
};

function showErrorMessage(id, message) {
  const pElement = document.createElement("p");
  pElement.setAttribute("id", id + "Error");
  const textNode = document.createTextNode(message, "Please Enter username");
  pElement.append(textNode);
  document.getElementById(id).appendChild(pElement);
}

function removeErrorMessage(id) {
  const element = document.getElementById(id + "Error");
  element.parentNode.removeChild(element);
}

function submit() {
  fieldValidator.validateUserName("username");
  fieldValidator.validateEmail("email");
}

window.addEventListener("DOMContentLoaded", function () {
  // init();
});
