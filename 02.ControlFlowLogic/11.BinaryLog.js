function binaryLogarithm(nums) {
    let result = '';
    for (let x of nums) {
        result += (Math.log2(x)).toString() + '\n';
    }

    return result;
}

console.log(binaryLogarithm(['1024'])); // 10
