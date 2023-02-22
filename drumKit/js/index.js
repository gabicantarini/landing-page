
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio('./sounds/crash.mp3');
for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {   
        audio.play();
    });
}





