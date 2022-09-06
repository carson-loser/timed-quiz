var start_btn = document.querySelector(".start-btn");
var hiscore_btn = document.querySelector(".hiScoreBtn");

// add an event listener for clicking start quiz






























var timeEl = document.querySelector(".time-left");


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTime();