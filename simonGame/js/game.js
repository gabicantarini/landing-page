
var buttonCollors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
      
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
});


function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonCollors[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);

 //1. Select the button with the same id as the randomChosenColour
 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


}


function playSound(name) {
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
          
}



