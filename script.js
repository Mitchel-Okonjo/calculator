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