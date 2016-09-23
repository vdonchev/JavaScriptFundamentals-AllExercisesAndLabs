function isLeapYear([year]) {
    year = Number(year);
    let yearType = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    return yearType ? 'yes' : 'no';
}

console.log(isLeapYear([1999])); // no
console.log(isLeapYear([2000])); // yes
console.log(isLeapYear([1900])); // no