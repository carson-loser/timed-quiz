var start_btn = document.querySelector(".start-btn");
var hiscore_btn = document.querySelector(".hiScoreBtn");

// add an event listener for clicking start quiz

start_btn.addEventListener("click", function (event) {
  event.preventDefault()
  document.querySelector(".question1").style = "display:block";
  document.querySelector(".start-section").style = "display:none";
  setTime();
  que2();
});

function que2() {
  var answerButtons = document.querySelectorAll(".ans1-button");
  console.log(answerButtons);

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
      event.preventDefault()
      document.querySelector(".question2").style = "display:block";
      document.querySelector(".question1").style = "display:none";
    });

  }
  que3();
}

function que3() {
  var answerButtons = document.querySelectorAll(".ans2-button");
  console.log(answerButtons);

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
      event.preventDefault()
      document.querySelector(".question3").style = "display:block";
      document.querySelector(".question2").style = "display:none";
    });
  }
  que4();
}

function que4() {
  var answerButtons = document.querySelectorAll(".ans3-button");
  console.log(answerButtons);

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
      event.preventDefault()
      document.querySelector(".question4").style = "display:block";
      document.querySelector(".question3").style = "display:none";
    });
  }
  que5();
}

function que5() {
  var answerButtons = document.querySelectorAll(".ans4-button");
  console.log(answerButtons);

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
      event.preventDefault()
      document.querySelector(".question5").style = "display:block";
      document.querySelector(".question4").style = "display:none";
    });
  }
}
























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

