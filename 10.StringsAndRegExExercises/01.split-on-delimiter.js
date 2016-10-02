let f = ([text, delimiter]) => text
    .split(delimiter)
    .join('\n');

console.log(f(['One-Two-Three-Four-Five', '-']));