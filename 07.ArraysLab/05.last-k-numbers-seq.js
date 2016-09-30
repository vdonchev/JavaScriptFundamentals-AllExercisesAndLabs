function extractNumbers(arr) {
    let [n, k] = arr.map(Number);

    let res = [1];
    for (let i = 1; i < n; i++) {
        res[i] = res.slice(Math.max(0, i - k), i + 1).reduce((a, b) => a + b);
    }

    return res.join(' ');
}

console.log(extractNumbers(['8', '2']));