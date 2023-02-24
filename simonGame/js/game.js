
var buttonCollors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

var level = 0;

var started = false;

$(document).keydown(function() {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    } 
})


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
      
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
});


function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonCollors[randomNumber];
    gamePattern.push(randomChosenColour);

 //1. Select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);

}


function playSound(name) {
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
          
}


function animatePress(currentColour) {
    
    $('#' + currentColour).addClass("pressed");
    
    setTimeout(function(){
        $('#' + currentColour).removeClass(["pressed"]);
    },100)
    
}



