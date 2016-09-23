function inchesToFeetInches([inches]) {
    return `${parseInt((inches / 12).toString())}'-${inches % 12}"`;
}

console.log(inchesToFeetInches([36])); // 3'-0"
console.log(inchesToFeetInches([55])); // 4'-7"
console.log(inchesToFeetInches([11])); // 0'-11"