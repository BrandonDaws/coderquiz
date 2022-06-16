var quizHead = document.querySelector(".quizHeader");
var time = document.querySelector(".timer");
var scores = document.querySelector(".highScore");
var start = document.querySelector(".startQuiz");
var seconds = 60;
var timelapse = 0;

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


 //timer funct
 //