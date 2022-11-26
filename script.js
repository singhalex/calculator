let displayValue;
let operatorValue;
let firstNumber;
let secondNumber;
let displayClearFlag = false;

const numberButtons = document.querySelectorAll("#digit");
const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll("#operator");
const equals = document.querySelector(".equals");

numberButtons.forEach(digit => {
    digit.addEventListener("click", () => {
        if (display.textContent === "0" && digit.textContent === "0") {
            return;
        } else if (display.textContent.includes(".") && digit.textContent === ".") {
            return;
        } else if (display.textContent.charAt(0) === "0" && display.textContent.length == 1 && digit.textContent != ".") {
            if (displayClearFlag) {
                display.textContent = "";
                display.textContent += digit.textContent;
                displayValue = display.textContent;
                displayClearFlag = false;
            } else {
                display.textContent = "";
                display.textContent += digit.textContent;
                displayValue = display.textContent;
            }            
        } else if (display.textContent.length == 9) {
            return;
        } else {
            if (displayClearFlag) {
                display.textContent = "";
                display.textContent += digit.textContent;
                displayValue = display.textContent;
                displayClearFlag = false;
            } else {
                display.textContent += digit.textContent;
                displayValue = display.textContent;
            }
            
        }
    })
})

clearButton.addEventListener("click", () => {
    display.textContent = "0"; 
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        display.textContent = displayValue;
        firstNumber ? secondNumber = Number(displayValue) : firstNumber = Number(displayValue);
        operatorValue = operator.textContent;
        displayClearFlag = true;
    })
})

equals.addEventListener("click", () => {
    secondNumber = Number(display.textContent)
    switch (operatorValue) {
        case "+":
            display.textContent = add(firstNumber, secondNumber);
            displayClearFlag = true;
            break;
        case "-":
            display.textContent = subtract(firstNumber, secondNumber);
            displayClearFlag = true;
            break;
        case "X":
            display.textContent = multiply(firstNumber, secondNumber);
            displayClearFlag = true;
            break;
        case "÷":
            display.textContent = divide(firstNumber, secondNumber);
            displayClearFlag = true;
            break;
    }
    firstNumber = undefined;
    secondNumber = undefined;
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