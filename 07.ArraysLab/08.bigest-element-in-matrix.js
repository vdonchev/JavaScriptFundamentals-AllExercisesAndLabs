let f = arr => arr
    .map(r => r.split(' ')
        .map(Number)
        .sort((a, b) => b - a)
        .reduce((a, b) => Math.max(a, b)))
    .reduce((a, b) => Math.max(a, b));

console.log(f(['20 50 10', '8 33 145']));