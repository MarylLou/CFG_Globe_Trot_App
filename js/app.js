"use strict";

function saveUserName() {
    let saveUserNameBtn = document.getElementById("userNameInput").value;
    localStorage.setItem("userNameValue", saveUserNameBtn);
  return false;
}