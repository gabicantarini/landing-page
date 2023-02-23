
var buttonCollors = ["red", "blue", "green", "yellow"];
var gamePattern = [];



function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonCollors[randomNumber];
    gamePattern.push(randomChosenColour);
}



console.log(nextSequence());