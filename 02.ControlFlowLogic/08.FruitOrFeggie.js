function food(input) {
    let word = input[0];
    switch (word) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            return 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'parsley':
        case 'garlic':
            return 'vegetable';
            break;
        default:
            return 'unknown';
    }
}

console.log(food(['banana'])); // fruit
console.log(food(['cucumber'])); // vegetable
console.log(food(['pizza'])); // unknown