function extractSequence(arr) {
    arr = arr.map(Number);
    let currentBest = arr[0];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBest) {
            currentBest = arr[i];
            res.push(currentBest);
        }
    }

    return res.join('\n');
}

console.log(extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));