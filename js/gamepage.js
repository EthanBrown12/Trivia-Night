const gameCurrentQuestion = document.getElementById('gameCurrentQuestion');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let questionCounter = document.getElementById('questionCounter');
let currentQuestion = 1;
let score = document.getElementById('score');
const maxQuestions = 10;
let currentScore = 0;
const points = 50;
const modal = document.getElementById('win-modal');
const modalText = document.getElementById('end-game');



option1.addEventListener('click', option1Click)
option2.addEventListener('click', option2Click)
option3.addEventListener('click', option3Click)
option4.addEventListener('click', option4Click)

window.onload = sendApiRequest;

async function sendApiRequest() {
  let response = await fetch("https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple");
  console.log(response);
  let data = await response.json();
  console.log(data.results);
  createTrivia(data.results);
}

function createTrivia(data) {
  let options = [1, 2,3, 4];
  let wrongAnswers = [0, 1, 2]

  console.log(data)
  let randomNumber = Math.floor(Math.random() * options.length);
  let optionIndex = options.splice(randomNumber, 1);



  gameCurrentQuestion.innerHTML = `${data[0].question}`
  `option${optionIndex}.innerHTML` = `${data[0].correct_answer}`

  randomNumber = Math.floor(Math.random() * options.length)
  optionIndex = options.splice(randomNumber, 1);

  `option${optionIndex}.innerHTML` = `${data[0].incorrect_answers[0]}`

  randomNumber = Math.floor(Math.random() * options.length)
  optionIndex = options.splice(randomNumber, 1);

  `option${optionIndex}.innerHTML` = `${data[0].incorrect_answers[1]}`

  randomNumber = Math.floor(Math.random() * options.length)
  optionIndex = options.splice(randomNumber, 1);

  `option${optionIndex}.innerHTML` = `${data[0].incorrect_answers[2]}`
 }

function option1Click(event) {
    if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
    } else if(currentQuestion >= maxQuestions && currentScore < 250) {
      youLose();
    } else if(event.target === option1){
    gameCurrentQuestion.innerHTML = `Correct!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    currentScore = currentScore + points;
    score.innerHTML = currentScore;
    sendApiRequest();
  }

};

function option2Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option2) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    sendApiRequest();
  }
}


function option3Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option3) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    sendApiRequest();
  }
};


function option4Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option4) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    sendApiRequest();
  }
}



function youWin(){
      modal.classList.remove('hidden');
      gameCurrentQuestion.innerHTML = ` `;

   };

function youLose() {
  modal.classList.remove('hidden');
  modalText.textContent =`Sorry you lost but have a drink!`;
  gameCurrentQuestion.innerHTML = ` `;
};
