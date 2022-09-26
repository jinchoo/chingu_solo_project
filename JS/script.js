const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
//push the questions into availableQuestions Array
function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
  //console.log(availableQuestions);
}

// set question number and question and options
function getNewQuestion() {
  // set question number
  questionNumber.innerHTML =
    "Question " + (questionCounter + 1) + " of " + quiz.length;

  // set question text
  // get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.question;
  //console.log(questionIndex);

  // get the position of 'questionIndex' from the availableQuestion Array
  const index1 = availableQuestions.indexOf(questionIndex);
  // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
  availableQuestions.splice(index1, 1);
  //console.log(questionIndex);
  //console.log(availableQuestions);
  // set options
  // get the length of options
  const optionLen = currentQuestion.options.length;
  // push options into availableOptions Array
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }
  //create options in html
  for (let i = 0; i < optionLen; i++) {
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[i];
    option.id = i;
    option.className = "option";
    optionContainer.appendChild(option);
  }
  //console.log(currentQuestion.options);
  //console.log(availableOptions);
  questionCounter++;
}

function next() {
  if (questionCounter === quiz.length) {
    console.log("quiz over");
  } else {
    getNewQuestion();
  }
}
window.onload = function () {
  //first we will set all questions in availableQuestions Array
  setAvailableQuestions();
  //second we will call getNewQuestion(); function
  getNewQuestion();
};