let f = arr => arr.map(Number).sort((a, b) => a - b).slice(0, 2);

console.log(f(['30', '15', '50', '5']));