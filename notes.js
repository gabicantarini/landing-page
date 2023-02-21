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

