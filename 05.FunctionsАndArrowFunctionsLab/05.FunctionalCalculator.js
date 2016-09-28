function calculator([operandA, operandB, operator]) {
    [operandA, operandB] = [operandA, operandB].map(Number);

    let add = (a, b) => a + b;
    let substract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let calculate = (a, b, op) => op(a, b);

    switch (operator) {
        case '+':
            return calculate(operandA, operandB, add);
        case '-':
            return calculate(operandA, operandB, substract);
        case '*':
            return calculate(operandA, operandB, multiply);
        default:
            return calculate(operandA, operandB, divide);
    }
}

console.log(calculator(['5', '6', '+']));