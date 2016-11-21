//      ### Scoring Functions ###

let scoreCounter = 0;


// Helper function to remove hide class on moles.
function randomUnhide(obj, min, max) {
  setTimeout(function() {
    $(obj).removeClass('hide');
  }, getRandomInt(min, max));
}

function hit() { // not very modular
  scoreCounter++;
  updateScore();
  $(this).addClass('hide');
  let that = this;
  randomUnhide(that, 3000, 7000);
}

$('.mole').on('click', hit);


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
    seconds = 30;
    scoreCounter = 0;
    startTimer();
    randomUnhide('#js-mole-1', 2000, 2000);
    randomUnhide('#js-mole-2', 3000, 5000);
    randomUnhide('#js-mole-3', 3000, 5000);
    randomUnhide('#js-mole-4', 3000, 5000);
    randomUnhide('#js-mole-5', 3000, 5000);
    randomUnhide('#js-mole-6', 3000, 5000);
    // if (seconds == 0) {
    //   return stopGame();
    // // setTimeout(function () { stopGame}, (seconds * 1000))
}

// Make an end game function

// Function that generates a number between 1500 and 3000
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
