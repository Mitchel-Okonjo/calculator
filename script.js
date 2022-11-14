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