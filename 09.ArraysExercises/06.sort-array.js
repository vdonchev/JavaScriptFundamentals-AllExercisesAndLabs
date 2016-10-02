let f = arr => arr.sort().sort((a, b) => a.length - b.length).join('\n');

console.log(f(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));