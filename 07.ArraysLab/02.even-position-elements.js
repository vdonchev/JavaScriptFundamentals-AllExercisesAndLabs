let f = arr => arr
    .filter((e, i) => i % 2 == 0)
    .join(' ');

console.log(f(['20', '30', '40']));