//Keeps track of quiz
var currentQuestion = 0;
var time = questions.length * 10;
var timerId;

var timeLeft = document.querySelector('#time');
var startButton = document.querySelector('#startQuiz');
var questionsSec = document.querySelector('#questions');
var choicesSec = document.querySelector('#choices');
var feedbackSec =  document.querySelector('#feedback');
var userInitials = document.querySelector('#userInitials');
var submitButton = document.querySelector('#submit');


//Starts quiz once button clicked
startButton.addEventListener("click", function(){
    //Changes class of starting page from 'on' to 'off'
    var pageIntro = document.getElementById('intro');
    pageIntro.setAttribute('class', 'off');

    questionsSec.setAttribute('class', 'choices-page on');

    timerId = setInterval(quizTimer, 1000);

    timeLeft.textContent = time;

    console.log(time);

    quizTimer();
    displayQuestion();
});

//Look how to use timeInterval to set time countdown
function quizTimer(){
    time--;
    timeLeft.textContent = time; 

    if (time < 0){
        time = 0;
    }

    if(time <= 0){
        endQuiz();
    }
};

//Boolean function that determines if button pressed is correct or incorrect
function displayQuestion(){
    var questionDis = questions[currentQuestion];
    var choicesDis = questionDis.options;

    var titleEL = document.getElementById('questionsTitle');
    titleEL.textContent = questionDis.title;

    choicesSec.setAttribute('class', 'choices');

    var firstOpt = document.getElementById('a');
    firstOpt.setAttribute('value', choicesDis[0])
    firstOpt.textContent = choicesDis[0];
    firstOpt.onclick = checkAnswer;

    var secondOpt = document.getElementById('b');
    secondOpt.setAttribute('value', choicesDis[1])
    secondOpt.textContent = choicesDis[1];
    secondOpt.onclick = checkAnswer;

    var thirdOpt = document.getElementById('c');
    thirdOpt.setAttribute('value', choicesDis[2])
    thirdOpt.textContent = choicesDis[2];
    thirdOpt.onclick = checkAnswer;
    
    var fourthOpt = document.getElementById('d');
    fourthOpt.setAttribute('value', choicesDis[3])
    fourthOpt.textContent = choicesDis[3];
    fourthOpt.onclick = checkAnswer;
}

function checkAnswer(){
    if(this.value == questions[currentQuestion].answer){
        
        feedbackSec.textContent = 'Correct!';
    } else {
        time -= 5;
        timeLeft.textContent = time;
        feedbackSec.textContent = 'Ooo, Try again';
    }

    feedbackSec.setAttribute('class', 'feedback on');
    setTimeout(function(){
        feedbackSec.setAttribute('class', 'feedback off')
    }, 1000);

    currentQuestion++;

    if(currentQuestion === questions.length){
        endQuiz();
    } else{
        displayQuestion();
    }
}

function endQuiz(){
    clearInterval(timerId);

    var endQuiz = document.getElementById('end');
    endQuiz.setAttribute('class', 'end-page on');

    var finalScore = document.getElementById('finalScore');
    finalScore.textContent = time;

    questionsSec.setAttribute('class', 'off');
}

submitButton.addEventListener("click", function(){
    var initials = userInitials.value.trim();

    if(initials == ""){
        alert('Make sure to put in your initials.');
        return;
    } else{
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = 'highscores.html';
    }
})
