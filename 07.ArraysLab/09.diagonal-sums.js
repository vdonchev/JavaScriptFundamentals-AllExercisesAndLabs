function calculateDiagonalSums(input) {
    let matrix = input.map(r => r.split(' ').map(Number));
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][row];
        rightDiagonalSum += matrix[row][matrix.length - row - 1];
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

calculateDiagonalSums(['3 5 17', '-1 7 14', '1 -8 89']);