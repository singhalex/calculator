let displayValue;
let operatorValue;
let firstNumber;
let secondNumber;

const numberButtons = document.querySelectorAll("#digit");
const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll("#operator");

console.log(operators);
console.log(numberButtons);


numberButtons.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.textContent === "0" && digit.textContent === "0") {
            return;
        } else if (display.textContent.includes(".") && digit.textContent === ".") {
            return;
        } else if (display.textContent.charAt(0) === "0" && display.textContent.length == 1 && digit.textContent != ".") {
            display.textContent = "";
            display.textContent += digit.textContent;
            displayValue = display.textContent;
        } else if (display.textContent.length == 9) {
            return;
        } else {
            display.textContent += digit.textContent;
            displayValue = display.textContent;
        }
    })
})

clearButton.addEventListener("click", () => {
    display.textContent = "0"; 
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        console.log("operator");
        display.textContent = displayValue;
        firstNumber ? secondNumber = displayValue : firstNumber = displayValue;
        operatorValue = operator.textContent;
        display.textContent = "0";
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(operatorValue);
    })
})


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}