let f = arr => arr
    .join('')
    .split('')
    .reverse()
    .join('');

console.log(f(['I', 'am', 'student']));