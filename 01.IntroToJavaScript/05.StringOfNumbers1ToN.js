function stringOfNumbers(input) {
    var num = Number(input[0]);
    let string = '1';
    for (let i = 2; i <= num; i++) {
        string += i;
    }

    console.log(string);
}

stringOfNumbers(['11']); // '1234567891011'