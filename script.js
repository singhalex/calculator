const maxDisplayLength = 9;
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
        } else if (display.textContent.length == maxDisplayLength && displayClearFlag == false) {
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

// numberButtons.forEach(digit => {
//     digit.addEventListener("keydown", event => {
//         console.log(event.key);
//         console.log(digit.textContent);
//         })
// })



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
            if (add(firstNumber, secondNumber).toString().length > maxDisplayLength) {
                errorScreen();
                break;
            } else {
                display.textContent = add(firstNumber, secondNumber);
                displayClearFlag = true;
                break;
            }
        case "-":
            if (subtract(firstNumber, secondNumber).toString().length > maxDisplayLength) {
                errorScreen();
                break;
            } else {
                display.textContent = subtract(firstNumber, secondNumber);
                displayClearFlag = true;
                break;
            }
        case "X":
            if (multiply(firstNumber, secondNumber).toString().length > maxDisplayLength) {
                errorScreen();
                break;
            } else {
                display.textContent = multiply(firstNumber, secondNumber);
                displayClearFlag = true;
                break;
            }            
        case "÷":
            if (divide(firstNumber, secondNumber).toString().length > maxDisplayLength) {
                errorScreen();
                break;
            } else {
                display.textContent = divide(firstNumber, secondNumber);
                displayClearFlag = true;
                break;
            }           
        default:
            break
    }
    firstNumber = undefined;
    secondNumber = undefined;
    operatorValue = undefined;
})

function errorScreen() {
    display.textContent = "halp!";
}


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