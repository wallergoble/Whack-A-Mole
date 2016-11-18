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

function startTimer() {
  let seconds = 5;              // need to make this a variable later
  console.log('hello from start timer');
  setInterval(function() {
    $('.timer-span').html(seconds); // polish this to not show 60
    --seconds;
    if (seconds > 0) {
      return isGameOver = true;
    }
    }, 1000);
}
startTimer();
// startGame() {
//   console.log('Hello from startGame');
//   // scoreCounter = 0;
//   // startTimer();
//   // $('.mole').removeClass(hide)
// }
