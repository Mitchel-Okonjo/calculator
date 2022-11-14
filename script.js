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
