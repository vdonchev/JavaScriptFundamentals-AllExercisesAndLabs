let f = ([words]) => words.split(/[^A-Za-z0-9_]/).filter(e => e != '').join('|');

console.log(f(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']));