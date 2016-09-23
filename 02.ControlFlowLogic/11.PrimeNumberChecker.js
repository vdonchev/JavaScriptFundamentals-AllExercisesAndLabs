function isPrime([number]) {
    number = Number(number);
    let isPrime = true;
    for (var num = 2; num < Math.sqrt(number); num++) {
        if (number % num == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime && number > 1;
}

console.log(isPrime(['7'])); // true
console.log(isPrime(['8'])); // false
console.log(isPrime(['81'])); // false