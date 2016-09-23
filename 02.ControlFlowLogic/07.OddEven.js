function isNumberOddEvenOrInvalid([number]) {
    number = Number(number);
    let result = number % 2;
    if (result == 0) {
        return 'even';
    }

    if (result != 0 && result == Math.round(result)) {
        return 'odd';
    }

    return 'invalid';
}

console.log(isNumberOddEvenOrInvalid(['5'])); // odd
console.log(isNumberOddEvenOrInvalid(['8'])); // even
console.log(isNumberOddEvenOrInvalid(['1.5'])); // invalid