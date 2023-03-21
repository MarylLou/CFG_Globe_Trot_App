"use strict";


let toTypeWriteArray = ["Level complete", "you score"];
let typeWriterOne = document.getElementById("typeWriterOne");

let startPosition = 0;
let speed = 100;

function typeWriter() {
    typeWriterOne.innerHTML =
    toTypeWriteArray[0].substring(0, startPosition)
    + "<span>\u25ae</span>";

    if(startPosition++ != toTypeWriteArray[0].length)
    setTimeout(typeWriter, speed);
}

window.addEventListener("load", typeWriter);

const display = s => output.innerText = s;

  const delayLoop = (fn, delay) => {
    return (name, i) => {
      setTimeout(() => {
        display(name);
      }, i * 1000);
    }
  };
  
  toTypeWriteArray.forEach(delayLoop(display, 1000));



  var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  toTypeWriteArray.forEach(function (el, index) {
    setTimeout(function () {
      console.log(el);
  
    }, index * interval);
  });
  console.log('Loop finished.');