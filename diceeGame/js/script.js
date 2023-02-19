var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceeImages = Math.random();
diceeImages = ["./images/dice1.png","./images/dice2.png", "./images/dice3.png", "./images/dice4.png", 
"./images/dice5.png", "./images/dice6.png"];
diceeImages = diceeImages * 6;



function leftDiceeImage() {
    
        var diceeImg = document.getElementsByClassName("img1");
        diceeImg.setAttribute("src","./images/dice2.png");   
    
   
}

