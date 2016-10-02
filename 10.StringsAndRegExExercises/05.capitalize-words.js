let f = ([text]) => text
    .split(' ')
    .map(ch => ch.substr(0, 1).toUpperCase() + ch.substr(1, ch.length).toLocaleLowerCase())
    .join(' ');

console.log(f(['Was that Easy? tRY thIs onE for SiZe!']));