function findOddNumbers([maxNumber]) {
    maxNumber = Number(maxNumber);
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

findOddNumbers(['7']);