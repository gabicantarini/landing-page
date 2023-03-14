let calculation = "";

function insertNumber(number) {
  calculation += number;
  document.getElementById("result").value = calculation;
}

function calcOperator(operator) {
  if (calculation.charAt(calculation.length - 1) !== operator) {
    calculation += operator;
    document.getElementById("result").value = calculation;
  }
}

function calculate() {
  const result = eval(calculation);
  document.getElementById("result").value = result;
  calculation = result.toString();
}

function clearAll() {
  calculation = "";
  document.getElementById("result").value = "";
}

