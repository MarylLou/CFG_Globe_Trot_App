"use strict";

let modal = document.getElementById("myModal");
let btnOpen = document.getElementById("myBtn");
let containerBlur = document.getElementById("mainContainer");
let glitchHide = document.getElementById("glitch");

// When the user clicks on the button, open the modal
btnOpen.onclick = function () {
  modal.style.display = "block";
  containerBlur.className = "MainContainer is-blurred";
  glitchHide.className = "typeWriter is-hidden";
};
