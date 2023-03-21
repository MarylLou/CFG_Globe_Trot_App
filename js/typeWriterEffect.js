"use strict";

let indexUserName = 0;
let indexComplete = 0;
let writeComplete = "Level complete";
let indexScore = 0;
let writeScore = "you scored: ";

let speed = 100;

let interval = 2000;

function uploadUserName() {
  const userName = localStorage.getItem("userNameValue");
  if (indexUserName < userName.length) {
    document.getElementById("userNameResult").innerHTML +=
      userName.charAt(indexUserName);
    indexUserName++;
    setTimeout(uploadUserName, speed);
    setTimeout(typeWriterComplete, interval);
  }
}

function typeWriterComplete() {
  if (indexComplete < writeComplete.length) {
    document.getElementById("writeComplete").innerHTML +=
      writeComplete.charAt(indexComplete);
    indexComplete++;
    setTimeout(typeWriterComplete, speed);
    setTimeout(typeWriterScore, interval);
  }
}

function typeWriterScore() {
  if (indexScore < writeScore.length) {
    document.getElementById("writeScore").innerHTML +=
      writeScore.charAt(indexScore);
    indexScore++;
    setTimeout(typeWriterScore, speed);
    setTimeout(showScore, interval);
  }
}

const mostRecentScore = localStorage.getItem("mostRecentScore");
function showScore() {
  document.getElementById("finalScore").innerText = mostRecentScore;
  myReward(mostRecentScore);
}

function myReward() {

  const scoreRating =
  mostRecentScore == 0
  ? document.querySelector("img").src = "../img/score_null.png"
  : mostRecentScore == 30
  ? document.querySelector("img").src = "../img/score_win.png"
  : document.querySelector("img").src = "../img/score_medium.png"

  document.querySelector("img").className = "finalImageShow";
console.log(scoreRating)
}


  // if (mostRecentScore == 0) {
  //   document.querySelector("img").src = "../img/score_null.png";
  // } else if (mostRecentScore >= 1 && mostRecentScore <= 29) {
  //   document.querySelector("img").src = "../img/score_medium.png";
  // } else {
  //   document.querySelector("img").src = "../img/score_win.png";
  // }


window.addEventListener("load", uploadUserName);
