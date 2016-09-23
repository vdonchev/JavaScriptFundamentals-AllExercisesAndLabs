// https://www.mathsisfun.com/algebra/quadratic-equation.html
function quadraticEquation(input) {
    let [a, b, c] = input.map(Number);
    let discriminant = (b * b)  - (4 * a * c);
    if (discriminant < 0) {
        return 'No';
    } else if (discriminant > 0) {
        let rootA = (-b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
        let rootB = (-b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);

        if (rootA < rootB) {
            return `${rootA}\n${rootB}`;
        }

        return `${rootB}\n${rootA}`;
    } else {
        return (-b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
    }
}

console.log(quadraticEquation([6, 11, -35])); // -3.5, 1.66667
console.log(quadraticEquation([1, -12, 36])); // 6
console.log(quadraticEquation([5, 2, 1])); // No