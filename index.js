var nog = document.getElementById("noOfGuess");
var gn = document.getElementById("guessedNum");
var msg = document.getElementById("message");

var answer = Math.floor(Math.random()*100)+1;
var noOfGuesses = 0;
var guessedNumber = [];

function play(){
    var userGuess = document.getElementById('guess').value;
    if(userGuess < 1 || userGuess > 100){
        alert("Please Enter Number in given Range");
    }
    else{
        guessedNumber.push(userGuess);
        noOfGuesses += 1;
        if(noOfGuesses == 10){
            nog.textContent = "Game Over ! You Lost... Refresh to Play Again :)";
            gn.textContent = "No. of Guesses: " + noOfGuesses;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
            document.getElementById("btn").disabled = true;

        }
        else if(userGuess < answer){
            nog.textContent = "Your Guess is too LOW."
            gn.textContent = "No. of Guesses: " + noOfGuesses;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
        }
        
        else if(userGuess > answer){
            nog.textContent = "Your Guess is too HIGH."
            gn.textContent = "No. of Guesses: " + noOfGuesses;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
        }
        else if(userGuess == answer){
            nog.textContent = "Yay! You Won."
            gn.textContent = "No. of Guesses: " + noOfGuesses + ".     The Number was: " + answer;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
            document.getElementById("btn").disabled = true;
        }
    }

}