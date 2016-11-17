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
  $('.score').html('Score: ' + scoreCounter);
}

function startTimer() {
  let seconds = 60              // need to make this a variable later
  setInterval(function() {
    $('.timer').html('0:' + seconds); // polish this to not show 60
    --seconds                   // should this be pre or postfixed?
    console.log(seconds)
    }, 1000);
}

startGame() {
  console.log('Hello from startGame');
  // scoreCounter = 0;
  // startTimer();
  // $('.mole').removeClass(hide)
}
