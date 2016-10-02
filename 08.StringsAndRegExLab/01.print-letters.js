let f  = arr => arr[0]
    .split('')
    .map((e, i) => `str[${i}] -> ${e}`)
    .join('\n');

console.log(f(['Hello, World!']));