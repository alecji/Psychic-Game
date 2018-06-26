
//Array for alphabet letters
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Counters
var win = 0;
var loss = 0;
var guessesRemaining = 10;
var currentGuesses =[];

//Function starts the entire game.
function gameStart() {

    //Generates random letter
    var randomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    console.log(randomLetter);

    //Resets guesses remaining to 10
    guessesRemaining = 10;
var letter = [];
    //Add keyboard events
    document.onkeyup = function (event) {

        letter = event.key.toLowerCase();

        if (letter === randomLetter) {
            win++;
            alert("You Win!");
            document.getElementById("wins").innerHTML = win;
            gameStart();
        } else {
            guessesRemaining--;
            document.getElementById("guessesLeft").innerHTML = guessesRemaining;
            console.log(guessesRemaining);
        };

        // if user guesses run out then the user loses.
        if (guessesRemaining === 0) {
            loss++;
            alert("you lose!");

            document.getElementById("losses").innerHTML = loss;
            gameStart();
        }
        
            document.getElementById("wordsGuessed").textContent= letter;
        
        
        
    };
};
gameStart();



