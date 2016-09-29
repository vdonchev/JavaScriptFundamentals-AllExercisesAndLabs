function validityChecker(input) {
    [x1, y1, x2, y2] = input.map(Number);
    printResult(x1, y1, 0, 0, isInteger(calc2dDistance(x1, y1)));
    printResult(x2, y2, 0, 0, isInteger(calc2dDistance(x2, y2)));
    printResult(x1, y1, x2, y2, isInteger(calc2dDistance(x1, y1, x2, y2)));

    function calc2dDistance(x1, y1, x2 = 0, y2 = 0) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function isInteger(num) {
        return num === Math.round(num);
    }

    function printResult(x1, y1, x2, y2, isInteger) {
        if (isInteger) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

validityChecker(['3','0','0','4']);
validityChecker(['2','1','1','1']);