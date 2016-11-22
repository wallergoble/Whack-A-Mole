//      ### Scoring Functions ###

var scoreCounter = 0;
var $moles = $('.mole');
var molesArray = $moles.toArray();       // Necessary to use forEach to iterate through moles.
let $mole1 = $("#js-mole-1");

function randomHide(moles) {
    moles.forEach(function(mole) {
        if (mole.className.includes("hide")) {
            if (Math.random() <= 0.25) {
                mole.classList.remove("hide");
            }
        } else {
            if (Math.random() <= 0.3) {
                mole.classList.add("hide");
            }
        }
    })
}

function hit() { // not very modular
    scoreCounter++;
    updateScore();
    $(this).addClass('hide');
    $('#boink-audio')[0].play();

    // let that = this;
    // randomUnhide(that, 3000, 7000);
}

$('.mole').on('click', hit);


function updateScore() { // need to make this not highlightable.
    $('.score-span').html(scoreCounter);
}


//      ### Timer Functions ###

let seconds = 5; // Starting place for the timer
let myTimer = null; // This is necessary to clear the interval

// This function increments the timer and dynamically updates the DOM
function showTimer() {
    if (seconds < 0) {
        clearInterval(myTimer);
        clearInterval(moleInterval);
        $($moles).addClass('hide');
        alert('You whacked ' + scoreCounter + ' moles!');
    } else {

    $('.timer-span').html(seconds)
    seconds--;
  }
};

function startTimer() {
    myTimer = window.setInterval(showTimer, 1000);
}

//      ### Start Game ###

var moleInterval = null;

function startGame() {
    console.log('Hello from startGame');
    seconds = 30;
    scoreCounter = 0;
    startTimer();
    moleInterval = setInterval(function() {randomHide(molesArray);}, 1000)
    $('#yak-audio')[0].play();
}
