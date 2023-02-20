
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var diceeImages = "images/dice" + randomNumber1 + ".png";

function winner1() {    

    var diceeImg = document.getElementsByClassName("img1")[0];
    diceeImg.setAttribute("src", diceeImages); 
}    
   
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var rightDiceeImages = "images/dice" + randomNumber2 + ".png";

function winner2() {
    var rightDiceeImage = document.getElementsByClassName("img2")[0];
    rightDiceeImage.setAttribute("src", rightDiceeImages); 

}

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 2 Wins! ";
    }
    else {
        document.querySelector("h1").innerHTML = " Draw! ";
    }



