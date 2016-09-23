function findBiggestNumber(input) {
    let [numA, numB, numC] = input.map(Number);

    return Math.max(numA, numB, numC);
}

console.log(findBiggestNumber([130, 5, 99])); // 130