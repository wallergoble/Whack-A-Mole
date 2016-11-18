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

function updateScore() { // need to make this not highlightable.
  console.log("goal")
  $('.score-span').html(scoreCounter);
}


//      ### Timer Functions ###
let seconds = 15;
let myTimer = null

function showTimer(){
  if (seconds <= 0){
    clearInterval(myTimer);
  }
  $('.timer-span').html(seconds)
  seconds--;
};

function startTimer() {
  let myTimer = window.setInterval(showTimer,1000);
}


//      ### Start Game ###
function startGame() {
  console.log('Hello from startGame');
  scoreCounter = 0;
  startTimer();
  $('.mole').removeClass(hide)
}
