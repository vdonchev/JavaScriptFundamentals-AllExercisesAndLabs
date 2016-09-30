function findEqualNeighbours(input) {
    let matrix = input.map(r => r.split(' '));
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (row + 1 < matrix.length && matrix[row][col] == matrix[row + 1][col])
                counter++;
            if (col + 1 < matrix[row].length && matrix[row][col] == matrix[row][col + 1])
                counter++;
        }
    }

    return counter;
}

console.log(findEqualNeighbours(
    ['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4']));

console.log(findEqualNeighbours(
    ['test yes yo ho',
    'well done yo 6',
    'not done yet 5']));