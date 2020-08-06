

var gameCurrentQuestionText = document.getElementById('gameCurrentQuestion');
var optionOneText = document.getElementById('option1');
var optionTwoText = document.getElementById('option2');
var optionThreeText = document.getElementById('option3');
var optionFourText = document.getElementById('option4');

var score = 0;
var questionCounter = 0;
var maxQuestions = 3;
var gameOver = false;
var gameCurrentQuestion = {};

var questionsLeft = [];
var questions = []


$.ajax({
  url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
  method: "GET",
  success: createTrivia,

  error: function (err) {
    console.log(err);
  }
})

function createTrivia(data) {
  console.log(data.results);
    // data.results.map(data)
  for (var i = 0; i < questions.length; i++) {
    gameCurrentQuestionText.textContent = questions[i].question;
    optionOneText.textContent = questions[i].option1;
    optionTwoText.textContent = questions[i].option2;
    optionThreeText.textContent = questions[i].option3;
    optionFourText.textContent = questions[i].option4;
   }

  }



function startGame() {
  score = 0;
  questionCounter = 0;
  questionsLeft = [...questions];
  grabNextQuestion();
}


function grabNextQuestion() {
  questionCounter++;
  var numberOfQuestionsLeft = questionsLeft.length;
  gameCurrentQuestion = questionsLeft[numberOfQuestionsLeft];
  if (questionsLeft.length === 0){
      console.log('hello');
     gameCurrentQuestionText.textContent="Game over";
  }
}
//|| questionCounter >= maxQuestions

// function updateDom(questions) {
//   for (var i = 0; i < questions.length; i++) {
//     gameCurrentQuestionText.textContent = questions[i].question;
//     optionOneText.textContent = questions[i].option1;
//     optionTwoText.textContent = questions[i].option2;
//     optionThreeText.textContent = questions[i].option3;
//     optionFourText.textContent = questions[i].option4;
//   }
// }

// updateDom(questions);
//grabNextQuestion();
// startGame();



// {
//   question: "What is the name of the very first video uploaded to YouTube?",
//     option1: "tribute",
//       option2: "carrie rides a truck",
//         option3: "Her new puppy from great grandpa vern.",
//           option4: "Me at the zoo",
//             answer: "Me at the zoo",
//   },

// {
//   question: "2This is another question",
//     option1: "2tribute",
//       option2: "2carrie rides a truck",
//         option3: "2Her new puppy from great grandpa vern.",
//           option4: "2Me at the zoo",
//             answer: "2Me at the zoo",
//   },
// {
//   question: "3Yet another question",
//     option1: "3tribute",
//       option2: "3carrie rides a truck",
//         option3: "3Her new puppy from great grandpa vern.",
//           option4: "3Me at the zoo",
//             answer: "3Me at the zoo",
//   }
//


// var uploadedQuestion = {
//   question: data.questions,
// };
