function binaryToDecimal([binaryNumber]) {
    let decimal = 0;
    let pow = 0;
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        decimal += Number(binaryNumber[i]) * Math.pow(2, pow);
        pow++;
    }
    
    return decimal;
}

console.log(binaryToDecimal(['00001001'])); // 9
console.log(binaryToDecimal(['11110000'])); // 240