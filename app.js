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
    }
    $('.timer-span').html(seconds)
    seconds--;
};

function startTimer() {
    myTimer = window.setInterval(showTimer, 1000);
}

//      ### Start Game ###
function startGame() {
    console.log('Hello from startGame')
    scoreCounter = 0;
    startTimer();
    setInterval(function() {randomHide(molesArray);}, 1000)
    
    // randomUnhide('#js-mole-1', 2000, 2000);
    // randomUnhide('#js-mole-2', 3000, 5000);
    // randomUnhide('#js-mole-3', 3000, 5000);
    // randomUnhide('#js-mole-4', 3000, 5000);
    // randomUnhide('#js-mole-5', 3000, 5000);
    // randomUnhide('#js-mole-6', 3000, 5000);
    // endGame();
}

// Make an end game function

function endGame() {
    setTimeout(function() {
        $('div.mole').addClass('hide')
    }, ((seconds + 2) * 1000))
}

// Function that generates a number between a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
