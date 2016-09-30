function rotateArray(input) {
    let numOfRotation = Number(input.pop()) % input.length;
    for (let i = 0; i < numOfRotation; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

console.log(rotateArray([1, 2, 3, 4, 2]));