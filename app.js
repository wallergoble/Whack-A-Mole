//      ### Scoring Functions ###

let scoreCounter = 0;

$('.mole').on('click', hit);

function hit() { // not very modular
  scoreCounter++;
  updateScore();
  $(this).addClass('hide');
  let that = this;
  setTimeout(function() { $(that).removeClass('hide') }, 1000);
}

function updateScore() {        // need to make this not highlightable.
  console.log("goal")
  $('.score-span').html(scoreCounter);
}


//      ### Timer Functions ###

let seconds = 60;               // Starting place for the timer
let myTimer = null;             // This is necessary to clear the interval

// This function increments the timer and dynamically updates the DOM
function showTimer(){
  if (seconds <= 0){
    clearInterval(myTimer);
  }
  $('.timer-span').html(seconds)
  seconds--;
};

function startTimer() {
  myTimer = window.setInterval(showTimer,1000);
}

//      ### Start Game ###
function startGame() {
    console.log('Hello from startGame')
    seconds = 6;
    scoreCounter = 0;
    startTimer();
    $('.mole').removeClass('hide')
}

// Function that generates a number between 1500 and 3000
