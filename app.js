//      ### Scoring Functions ###

var scoreCounter = 0;
var $moles = $('.mole');
var molesArray = $moles.toArray();       // Necessary to use forEach to iterate through moles.
let $mole1 = $("#js-mole-1");

// Helper function to remove hide class on moles.
function randomUnhide(obj, min, max) {
    setTimeout(function() {
        $(obj).removeClass('hide');
    }, getRandomInt(min, max));
}

function randomHide(moles) {
    moles.forEach(function(mole) {
      console.log(mole.className.includes("mole"));
        if (mole.className.includes("hide")) {
            if (Math.random() <= 0.2) {
                console.log('show');
                mole.classList.remove("hide");
            }
        } else {
            if (Math.random() <= 0.6) {
                console.log('hide');
                mole.classList.add("hide");
            }
        }
    })
}

function hit() { // not very modular
    scoreCounter++;
    updateScore();
    $(this).addClass('hide');
    // let that = this;
    // randomUnhide(that, 3000, 7000);
}

$('.mole').on('click', hit);


function updateScore() { // need to make this not highlightable.
    console.log("goal")
    $('.score-span').html(scoreCounter);
}


//      ### Timer Functions ###

let seconds = 5; // Starting place for the timer
let myTimer = null; // This is necessary to clear the interval

// This function increments the timer and dynamically updates the DOM
function showTimer() {
    if (seconds <= 0) {
        clearInterval(myTimer);
        clearInterval(moleInterval);
    }
    $('.timer-span').html(seconds)
    seconds--;
};

function startTimer() {
    myTimer = window.setInterval(showTimer, 1000);
}

//      ### Start Game ###

var moleInterval = null;

function startGame() {
    console.log('Hello from startGame');
    seconds = 30
    scoreCounter = 0;
    startTimer();
    moleInterval = setInterval(function() {randomHide(molesArray);}, 1100)
}
