function orbit(input) {
    let printMatrix = matrx => console.log(matrx.map(r => r.join(" ")).join('\n'));

    let [rows, cols] = input[0].split(' ').map(Number);
    let [x, y] = input[1].split(' ');

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let currentNum = 1;
    matrix[x][y] = currentNum;

    let hasChange = true;
    while (hasChange) {
        hasChange = false;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (matrix[row][col] == currentNum) {
                    hasChange = true;

                    for (let r = Math.max(0, row - 1); r <= Math.min(rows - 1, row + 1); r++) {
                        for (let c = Math.max(0, col - 1); c <= Math.min(cols - 1, col + 1); c++) {
                            if (matrix[r][c] == 0) {
                                matrix[r][c] = currentNum + 1;
                            }
                        }
                    }
                }
            }
        }

        currentNum++;
    }

    printMatrix(matrix);
}

orbit(['4 4', '0 0']);
orbit(['5 5', '2 2']);