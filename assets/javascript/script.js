var start_btn = document.getElementById('start-btn-loc')
var section_hide = document.querySelector('.start-section')
var main_content = document.querySelector('.content')
var timeEl = document.querySelector(".time-left");
var secondsLeft = 60;
var next_btn = document.getElementById('next-btn-loc')

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}

start_btn.addEventListener('click', startQuiz)

function startQuiz () {
  // console.log('started quiz')
    start_btn.style.display = 'none';
    section_hide.style.display = 'none';
    main_content.style.display = 'block';
    next_btn.style.display = 'block';
    setTime();
    nextQuestion()
}

function nextQuestion () {

}

function newAnswer () {

}

var questionList = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answerChoices: [
      { choice: '<js>', correct: false},
      { choice: '<scripting>', correct: false},
      { choice: '<script>', correct: true},
      { choice: '<javascript>', correct: false},
      
      
    ]
  }
]










































































































// var start_btn = document.querySelector(".start-btn");
// var hiscore_btn = document.querySelector(".hiScoreBtn");


// var correctBtns = document.querySelectorAll("#correct-btn");
// // console.log(correctBtns);

// for (var i = 0; i < correctBtns.length; i++) {
//   correctBtns[i].addEventListener("click", function (event) {
//     event.preventDefault()
//   correctBtns[i].setAttribute("style", "background-color: red; font-size: 15px");
//   });
 
//  }




// // add an event listener for clicking start quiz

// start_btn.addEventListener("click", function (event) {
//   event.preventDefault()
//   document.querySelector(".question1").style = "display:block";
//   document.querySelector(".start-section").style = "display:none";
//   setTime();
//   que2();

// });

// function que2() {
//   var answerButtons = document.querySelectorAll(".ans1-button");
//   console.log(answerButtons);
  
  





  
  
  
//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function (event) {
//       event.preventDefault()
//       document.querySelector(".question2").style = "display:block";
//       document.querySelector(".question1").style = "display:none";
      
//     });

//   }
//   que3();
// }

// function que3() {
//   var answerButtons = document.querySelectorAll(".ans2-button");
//   console.log(answerButtons);

//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function (event) {
//       event.preventDefault()
//       document.querySelector(".question3").style = "display:block";
//       document.querySelector(".question2").style = "display:none";
//     });
//   }
//   que4();
// }

// function que4() {
//   var answerButtons = document.querySelectorAll(".ans3-button");
//   console.log(answerButtons);

//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function (event) {
//       event.preventDefault()
//       document.querySelector(".question4").style = "display:block";
//       document.querySelector(".question3").style = "display:none";
//     });
//   }
//   que5();
// }

// function que5() {
//   var answerButtons = document.querySelectorAll(".ans4-button");
//   console.log(answerButtons);

//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function (event) {
//       event.preventDefault()
//       document.querySelector(".question5").style = "display:block";
//       document.querySelector(".question4").style = "display:none";
//     });
//   }
// }
























var timeEl = document.querySelector(".time-left");


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

