function modifyAverage([num]) {
    let sum = (a, b) => a + b;

    function average(arr) {
        let currentSum = 0;
        for (let n of arr) {
            currentSum = sum(currentSum, n);
        }

        return currentSum / arr.length;
    }

    let digits = num.split('').map(Number);
    while (average(digits) <= 5) {
        digits.push(9);
    }

    return digits.join('');
}

console.log(modifyAverage(['101']));