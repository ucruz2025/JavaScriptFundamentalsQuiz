var disHighscores = document.querySelector('#highscores');
var clearHighscores = document.querySelector('#clear');

//Function that gathers array from local storage and displays in a list
function viewHighscores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    for(var i = 0; i < highscores.length; i++){
        var highscore = highscores[i];

        var li = document.createElement('li');
        li.setAttribute('data-index', i)
        li.textContent = highscore.initials + " - " + highscore.score;
        
        disHighscores.appendChild(li);
    }
}

//Function that clears scores once button is clicked
clearHighscores.addEventListener("click", function(){
    window.localStorage.removeItem('highscores');
    window.location.reload();
});

//Calls the function once the page is opened
viewHighscores();