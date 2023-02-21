function lifeInWeeks(age) {
    var yearsRemaning = 90 * age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning * 12;

    console.log("You have " + days + "days, " + weeks + " weeks, and " + months + " months left")
}
lifeInWeeks(15);


function yearsTogether(year, birthYear) {
    var totalYears = year - birthYear;
    var totalYearsMonth = totalYears * 12;
    var totalYearsDays = totalYearsMonth * 365;
    var totalYearsHour = totalYearsDays * 24;

    console.log(totalYears + " and " + totalYearsMonth + " and " + totalYearsDays + " and " + totalYearsHour)
}
yearsTogether(2023, 1983);


function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));

    console.log(bmi);
}
bmiCalculator(65, 18);


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


let leapYear = (year) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Leap year." : "Not leap year";
leapYear(1998);

