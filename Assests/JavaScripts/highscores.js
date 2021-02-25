var disHighscores = document.querySelector('#highscores');
var clearHighscores = document.querySelector('#clear');

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

clearHighscores.addEventListener("click", function(){
    window.localStorage.removeItem('highscores');
    window.location.reload();
});

viewHighscores();