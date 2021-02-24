//Keeps track of quiz
var currentQuestion = 0;
var time = questions.length * 10;
var timerId;
console.log(time);
var timeLeft = document.querySelector('#time')
var startButton = document.querySelector('#startQuiz')//Need to add button to HTML
var questionsSec = document.querySelector('#questions')


//Starts quiz once button clicked
startButton.addEventListener("click", function(){
    //Changes class of starting page from 'on' to 'off'
    var pageIntro = document.getElementById('intro');
    pageIntro.setAttribute('class', 'off');

    questionsSec.setAttribute('class', 'on');

    timerId = setInterval(quizTimer, 1000);

    timeLeft.textContent = time;

    console.log(time);

    quizTimer();
});

//eventListener to view high scores
//viewHiSc.addEventListener("click", function(){
//
//});

//Look how to use timeInterval to set time countdown
function quizTimer(){
    time--;
    timeLeft.textContent = time; 

    if(time <= 0){
        //function that ends the quiz?
    }
};

//function that presents the series of questions?

//Preventing Default

//Boolean function that determines if button pressed is correct or incorrect
function checkAnswer(){

}

//If all questions are answered before, then timer reaches 0 and game is over

//Save initals to the local storage?