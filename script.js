const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
let operatorCount = 0;
let operationPair = [];
let firstOperand = "";
let secondOperand = "";
let result = "";
let displayValue = "";
let currentOperator = "";

displayContent();

calculator.addEventListener('click', (e) => {
    const classList = e.target.classList;
    const buttonValue = e.target.textContent;
    const operator = e.target.value;
    if (classList.contains('operand')) {
        getOperand(buttonValue);
        displayContent();
    }
    else if (classList.contains('operator')) {
        classList.add('active-operator');
        getOperator(operator);
        displayContent();
    }
    else if (classList.contains('equals')) {
        getEquals();
        displayContent();
    }
    else if (classList.contains('clear')) {
        clearScreen();
        displayContent();
    }
});

calculator.addEventListener('mousedown', (e) => {
    const classList = e.target.classList;
    const buttonValue = e.target.textConetent;
    const operator = e.target.value;
    if (classList.contains('center')) {
        classList.add('active-center');
    }
    else if (classList.contains('top')) {
        classList.add('active-top');
    }
    else if (classList.contains('right')) {
        classList.add('active-right');
    }
});

calculator.addEventListener('mouseup', (e) => {
    const classList = e.target.classList;
    if (classList.contains('center')) {
        classList.remove('active-center');
    }
    else if (classList.contains('top')) {
        classList.remove('active-top');
    }
    else if (classList.contains('right')) {
        classList.remove('active-right');
    }
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 === 0 ? "Math Error"
    : num1/num2;
}

function operate(operator, num1, num2) {
    return operator === "+" ? add(num1, num2)
    : operator === "-" ? subtract(num1, num2)
    : operator === "*" ? multiply(num1, num2)
    : divide(num1, num2);
}

function getOperand (operand) {
    if (firstOperand === "" && secondOperand === "") {
        firstOperand = operand;
        displayValue = firstOperand;
    }
    else if (firstOperand !== "" && secondOperand === "" && operatorCount === 0) {
        firstOperand += operand;
        displayValue = firstOperand;
    }
    else if (firstOperand !== "" && secondOperand === "" && operatorCount >= 1) {
        secondOperand = operand;
        displayValue = secondOperand;
    }
    else if (secondOperand !== "" && operatorCount === 1) {
        secondOperand += operand;
        displayValue = secondOperand;
    }
    else if (secondOperand !== "" && operatorCount > 1) {
        secondOperand += operand;
        displayValue = secondOperand;
    }
}

function getOperator (operator) {
    operatorCount += 1;

    if (firstOperand === "" && secondOperand === "") {
        displayValue = "0";
    }
    else if (operatorCount === 1 && firstOperand !== "" && secondOperand === "") {
        operationPair.push(firstOperand);
        operationPair.push(operator);
        operationPair.push(firstOperand);
        
    }
    else if (operatorCount > 1 && firstOperand !== "" && secondOperand !== "") {
        operationPair = [];
        operationPair.push(firstOperand);
        operationPair.push(currentOperator);
        operationPair.push(secondOperand);
        console.log(operationPair);
        result = "";
        result += performOperation(operationPair);
        console.log(result);
        displayValue = result;
        firstOperand = displayValue;
        console.log(firstOperand);
        secondOperand = "";
    }
    currentOperator = operator;
}

function getEquals() {
    if (operatorCount >= 1 && firstOperand !== "" && secondOperand !== "") {
        operationPair = [];
        operationPair.push(firstOperand);
        operationPair.push(currentOperator);
        operationPair.push(secondOperand);
        result = "";
        result += performOperation(operationPair);
        displayValue = result;
        firstOperand = displayValue;
        secondOperand = "";
    }
    else if (operatorCount === 0 && firstOperand !== "" && secondOperand === "") {
        displayValue = displayValue;
        firstOperand = displayValue;
    }
}

function performOperation(array) {
    const operator = array[1];
    let num1 = 0;
    let num2 = 0;
    if (array[0].includes(".")) {
        num1 = parseFloat(array[0]);
    }
    else {
        num1 = parseInt(array[0]);
    }

    if (array[2].includes(".")) {
        num2 = parseFloat(array[2]);
    }
    else {
        num2 = parseInt(array[2]);
    }
     return operate(operator, num1, num2);
}

function displayContent() {
    if (firstOperand === "" && secondOperand === "") {
        display.textContent = "0";
    }
    else if (displayValue.length > 13) {
        if (displayValue.includes(".")) {
            display.textContent = displayValue.substring(0, 13);
        }
    }
    else {
        display.textContent = displayValue;
    }
}

function clearScreen() {
    operatorCount = 0;
    operationPair = [];
    firstOperand = "";
    secondOperand = "";
    result = "";
    displayValue = "";
    currentOperator = "";
}