
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var diceeImages = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", diceeImages); 
  

   
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var rightDiceeImages = "images/dice" + randomNumber2 + ".png"; 
document.querySelector(".img2").setAttribute("src", rightDiceeImages); 



    if (randomNumber1 > randomNumber2) {        
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins! 🚩";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = " Draw! ";
    }





    