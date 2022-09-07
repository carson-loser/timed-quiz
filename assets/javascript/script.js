var question1 = {
  question: "Q1",
  answers: ["ans1", "ans2", "ans3", "ans4"],
  correctAnswer: "ans3"
};

var question2 = {
  question: "Q2",
  answers: ["ans1", "ans2", "ans3", "ans4"],
  correctAnswer: "ans1"
};

var question3 = {
  question: "Q3",
  answers: ["ans1", "ans2", "ans3", "ans4"],
  correctAnswer: "ans3"
};

var question4 = {
  question: "Q4",
  answers: ["ans1", "ans2", "ans3", "ans4"],
  correctAnswer: "ans4"
};

var question5 = {
  question: "Q5",
  answers: ["ans1", "ans2", "ans3", "ans4"],
  correctAnswer: "ans2"
};


















































// var start_btn = document.querySelector(".start-btn");
// var hiscore_btn = document.querySelector(".hiScoreBtn");
// var correctBtns = document.querySelectorAll(".correct-btn");
// var correctBtns = ["script", "myFunction()", "both", "both head and body work", "terminal"];

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
  
//   // correctBtns[0].addEventListener("click", function (event) {
//   //   event.preventDefault()
  





  // function correctQue()
  // var correctButtons = document.querySelectorAll(".correct-btn");
  // console.log(correctButtons);
  
  
  
//   for (let i = 0; i < answerButtons.length; i++) {
//     answerButtons[i].addEventListener("click", function (event) {
//       event.preventDefault()
//       document.querySelector(".question2").style = "display:block";
//       document.querySelector(".question1").style = "display:none";
//       // document.querySelector(".correct-btn").style ="background-color:green";
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

