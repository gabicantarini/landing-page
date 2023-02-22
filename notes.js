
// count life in weeks
function lifeInWeeks(age) {
    var yearsRemaning = 90 * age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning * 12;

    console.log("You have " + days + "days, " + weeks + " weeks, and " + months + " months left")
}
lifeInWeeks(15);

// calculate years together
function yearsTogether(year, birthYear) {
    var totalYears = year - birthYear;
    var totalYearsMonth = totalYears * 12;
    var totalYearsDays = totalYearsMonth * 365;
    var totalYearsHour = totalYearsDays * 24;

    console.log(totalYears + " and " + totalYearsMonth + " and " + totalYearsDays + " and " + totalYearsHour)
}
yearsTogether(2023, 1983);


//bmi calculator
function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));

    console.log(bmi);
}
bmiCalculator(65, 18);


//love rate
var name1 = prompt("Escreva teu primeiro e último nome: ");
var name2 = prompt("Escreva teu primeiro e último nome: ");
var calculateLove = Math.random();
calculateLove =  calculateLove * 100;
calculateLove = Math.floor(calculateLove) + 1;
console.log(calculateLove);
alert("These are the results of the calculations by Dr. Love: "
    + name1 + " ❤️ " + name2 + " "
    + calculateLove + " % "
)


//bmi calculator
function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));

    if(bmi < 18.5) {
        return("Your BMI is " + bmi + " , so you are underweight.");
    } if (bmi > 18.5 && bmi < 24.9) {
        return("Your BMI is " + bmi + " , so you are normal weight.");
    } else {
        return("Your BMI is " + bmi + " , so you are overweight.");
    }
}
bmiCalculator(100, 1);


//leap year function
let leapYear = (year) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Leap year." : "Not leap year";
leapYear(1998);


// What is z value
let z = 1 + + "2" + "2";
console.log(z);


// Select welcome inviter
var guestList = ["Angela", "Paulo", "Daniel", "Pedro", "Sarah", "Cecília"];
var name = prompt("What is your name? ");
let inviter = alert(guestList.includes(name) ? "Seja bem vindo!" : "Você não está na lista de convidados.");


// FizzBuzz with Random
let numbers = Math.random();
let numbersToHundred = numbers * 100;
let floorNumbers = Math.floor(numbersToHundred) + 1;
let fizz = floorNumbers % 3 === 0;
let buzz = floorNumbers % 5 === 0;
let fizzBuzz = fizz & buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : floorNumbers;
console.log(fizzBuzz);


// FizzBuzz with While
var output = [];
var count = 1 ;

function fizzBuzzy() {
    while(count <= 100) {
        let fizz = count % 3 === 0;
        let buzz = count % 5 === 0;
        let fizzBuzz = fizz & buzz ? output.push("FizzBuzz") : fizz ? output.push("Fizz") : buzz ? output.push("Buzz") : output.push(count);
        count ++;
    }
    console.log(output);
}


// FizzBuzz with for
var output = [];

function fizzBuzzy() {
    for(var count = 1; count <= 100; count++) {
        let fizz = count % 3 === 0;
        let buzz = count % 5 === 0;
        let fizzBuzz = fizz & buzz ? output.push("FizzBuzz") : fizz ? output.push("Fizz") : buzz ? output.push("Buzz") : output.push(count);
        count ++;
    }
    console.log(output);
}



// While loop to check a state
var output = [];
var count = 100;

function beer() {
    while(count >=1) {
        let song =  count + " bottles of beer on the wall, " +  count + "bottles of beer. Take 1 down, "
        + count-- + "bottles of beer on the wall." + "\n";

        let beerSong =  song ? output.push(song) : 
        output.push("No more bottles of beer on the wall,no more bottles of beer. Go to the store and buy some more, "
        + count + " botlles of beer on the wall.");
    }

    console.log(output + "No more botlles of beer on the wall, no more botlees of beer. Go to the store and buy some more, 99 botlles of beer on the wall.");
}


// Foor loop iterate items
for(var i = 1; i < 2; i++) {
    console.log(i);
}


//Calculator
function add(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
calculator(4,5,add); //9
calculator(4,5,multiply); //20


//object construction function
function HouseKeeper (yearsOfExperience, name, age, cleaningRepertoire) {
        
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
    this.cleaningRepertoire = cleaningRepertoire;   
    
}
//to create a new HouseKeeper in the object const0ruction
var HouseKeeper1 = new HouseKeeper (7, "Ana", 36, ["bedroom", "room", "bethroom"]);


//Methods = it is a function associated to an object
function moveSuitcase() {

    alert ("May I take your suitcase? ");
    pickUpSuitcase();
    move();
}

function cleaning() {
    alert("cleaning in progress!");
}


// object construction + methods
function HouseKeeper (yearsOfExperience, name, age, cleaningRepertoire) {        
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function() {
         alert("cleaning in progress!");
    };
    
}


//callback functions
document.addEventListener("keydown", respondToKey(event));
function respondToKey(event){
    console.log("key pressed.");
}