let f = arr => arr
    .filter((e, i) => i % 2 != 0)
    .map(e => e * 2)
    .reverse()
    .join(' ');

console.log(f(['10', '15', '20', '25']));