function isMatrixMagical(matrixInput) {
    let sumFunc = arr => arr.reduce((a, b) => a + b);
    
    let matrix = matrixInput.map(e => e.split(' ').map(Number));

    let sum = sumFunc(matrix[0]);
    for (let row = 1; row < matrix.length; row++) {
        if (sumFunc(matrix[row]) != sum)
            return false;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currentSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            currentSum += matrix[i][col];
        }

        if (currentSum != sum)
            return false;
    }

    return true;
}

console.log(isMatrixMagical(
    ['4 5 6',
    '6 5 4',
    '5 5 5']
));