"use strict";

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
      question: "What is the capital of Albania?",
      choice1: "Skope",
      choice2: "Tirana",
      choice3: "Riga",
      choice4: "Helsinki",
      answer: 2,
  },
  {
      question:"What is the capital of Spain?",
      choice1: "Chisinau",
      choice2: "Oslo",
      choice3: "Vilnius",
      choice4: "Madrid",
      answer: 4,
  },
  {
      question: "What is the capital of Slovakia?",
      choice1: "Bratislava",
      choice2: "Copenhagen",
      choice3: "Belgrade",
      choice4: "Luxembourg",
      answer: 1,
  },
];


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("../html/reward.html");
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  });
});

function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
};

startGame();