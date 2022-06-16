var quizHead = document.querySelector(".quizHeader");
var timerEl = document.querySelector(".timer");
var scores = document.querySelector(".highScore");
var start = document.querySelector(".startQuiz");

let counter =60;


const countdownTimer = function() {
    
    setInterval(function () {
        counter--; // reduce counter by 1

        if (counter >= 0) { // continue countdown if...
         timerEl.textContent = "Time Remaining: " + counter;
        }
        
        if (counter === 0) { // display
            timerEl.textContent = "Times Up!";
        }
    }, 1000);
};


start.addEventListener("click", countdownTimer)


/*
 const minutesTime = function(){
 var secondsLeft = seconds - timelapse;
 var minutesLeft = Math.floor(secondsLeft / 60)
 return minutesLeft;
 }
 const secondsTime = function(){
    var secondsLeft = (seconds - timelapse)% 60
    var formatSeconds;
    if(secondsLeft < 10){
        formatSeconds = "0:" + secondsLeft
    }else{
        formatSeconds = secondsLeft
    };
     if(timelapse >= seconds){
        return 0
     }
     return formatSeconds;
 };
 function timer() {
    time.textContent = "0" + minutesTime() + ":" + secondsTime();
 }



start.addEventListener("click", timer);
 //timer funct
*/