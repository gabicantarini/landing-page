var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

var diceeImages = "dice" + randomNumber1 + ".png";

var imageSource = "images/" + diceeImages;

var diceeImg = document.getElementsByClassName("img1")[0];
diceeImg.setAttribute("src", imageSource);   
    
   
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var rightDiceeImages = "images/dice" + randomNumber2 + ".png";

var rightDiceeImage = document.getElementsByClassName("img2")[0];
rightDiceeImage.setAttribute("src", rightDiceeImages); 


