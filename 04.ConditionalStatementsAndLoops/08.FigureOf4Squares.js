function generateFigure([size]) {
    size = Number(size);
    let output = '';

    if (size % 2 == 0) {
        let totalRows = size - 1;
        let totalCols = size * 2 - 1;
        let numberOfRows = (totalRows - 3) / 2;
        let numberOfCols = (totalCols - 3) / 2;

        let majorLine = `+${'-'.repeat(numberOfCols)}+${'-'.repeat(numberOfCols)}+\n`;
        let otherLine = `|${' '.repeat(numberOfCols)}|${' '.repeat(numberOfCols)}|\n`;
        output += majorLine;
        for (let row = 0; row < numberOfRows; row++) {
            output += otherLine;
        }

        output += majorLine;
        for (let row = 0; row < numberOfRows; row++) {
            output += otherLine;
        }

        output += majorLine;

        if (size == 2) {
            return majorLine;
        }
    } else {
        let totalRows = size;
        let totalCols = size * 2 - 1;
        let numberOfRows = (totalRows - 3) / 2;
        let numberOfCols = (totalCols - 3) / 2;

        let majorLine = `+${'-'.repeat(numberOfCols)}+${'-'.repeat(numberOfCols)}+\n`;
        let otherLine = `|${' '.repeat(numberOfCols)}|${' '.repeat(numberOfCols)}|\n`;
        output += majorLine;
        for (let row = 0; row < numberOfRows; row++) {
            output += otherLine;
        }

        output += majorLine;
        for (let row = 0; row < numberOfRows; row++) {
            output += otherLine;
        }

        output += majorLine;
    }

    return output;
}

console.log(generateFigure(['2']));