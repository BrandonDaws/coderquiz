var quizHead = document.querySelector(".quizHeader");
var timerEl = document.querySelector(".timer");
var scores = document.querySelector(".highScore");
var start = document.querySelector(".startQuiz");
var fstQst = document.querySelector(".question1");
var secQst = document.querySelector(".question2");
var thrQst = document.querySelector(".question3");
var fthQst = document.querySelector(".question4");
var landingPage = document.querySelector(".startSection");
let counter =60;
var questionCount = 0;
var score = 0;
var Ans1 = document.querySelector(".A1");
var Ans2 = document.querySelector(".A2");
var Ans3 = document.querySelector(".A3");
var Ans4 = document.querySelector(".A4");
var questEl = document.querySelector(".question");
 var questCont = document.querySelector(".questions");
 var ansRes = document.querySelector(".response");
 var ansButtons = document.querySelectorAll("#ansButton");

var questions = [
    {
        question: "What is a Div element used for?",
        answers:["A. Creating a unique division that can be given a class or ID.", "B.Creating For loops","C.nothing, Div element do not exist in HTMl","D. Defining a class of an object"],
        CA: "0"
    },
    {
        question: "Where does the script tag for Javasript go in your HTML file?",
        answers:["A. at the very top under the !Doctype declaration", "B.Just below the Header Tag before the Body Tag","C. At the bottom before the closing body tag","D. At the top just after the opening body tag"],
        CA: "2"
    },
    {
        question: "What Kind of Statement can be used to check True/false values?",
        answers:["A. verify() ", "B.if()","C.check()","D. askGoogle()"],
        CA: "1"
    },
    {
        question: "What is the proper syntax for an arrow function?",
        answers:["A. =>(a){}", "B.a { =>}","C.(a){}","D. (a) => {}"],
        CA: "3"
    }
];



const startGame = function(){
landingPage.style.display = "none";
questCont.style.display = "block";
questionsCount = 0;
askQuest(questionCount);
}


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

function askQuest(id) {
    if (id < questions.length) {
        questEl.textContent = questions[id].question;
        Ans1.textContent = questions[id].answers[0];
        Ans2.textContent = questions[id].answers[1];
        Ans3.textContent = questions[id].answers[2];
        Ans4.textContent = questions[id].answers[3];
    }
};

//check answer and move to next question
function checkAnswer(event) {
    event.preventDefault();

    ansRes.style.display = "block";
    var p = document.createElement("p");
    ansRes.appendChild(p);


    setTimeout(function () {
        p.style.display = "none";
    }, 1000);

//check answer
    if (questions[questionCount].CA === event.target.value) {
        p.textContent = "Correct!";
        score = score + 5;
    } else if (questions[questionCount].CA !== event.target.value) {
        counter = counter - 10;
        p.textContent = "Wrong";
    }
//increase questions index
    if (questionCount < questions.length) {
        questionCount++;
    }
    askQuest(questionCount);
};

function addScore(event) {
    event.preventDefault();

    inputEl.style.display = "none";
    highscoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    highScoreList.push({ initials: init, score: secondsLeft });

    highScoreList = highScoreList.sort((a,b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    highScoreListEl.innerHTML="";
    for (var i = 0; i < highScoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScoreList[i].initials + " " + highScoreList[i].score;
        highScoreListEl.append(li);
    }

    storeScores();
    displayScores();
};

function storeScores() {
    localStorage.setItem("ScoreList", JSON.stringify(highScoreList));
}

function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("ScoreList")) || [];
    if (storedScoreList !== null) {
        for( var i =storedScoreList.length-1;i>=0;i--){
        }
    }
};

function clearScores() {
    localStorage.clear();
    highScoreListEl.innerHTML="";
};


ansButtons.forEach(b => {
    b.addEventListener("click", checkAnswer);
});




start.addEventListener("click",startGame );

start.addEventListener("click",countdownTimer )


