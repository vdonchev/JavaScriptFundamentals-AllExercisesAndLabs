function findOccurrences([haystack, needle]) {
    needle = `\\b${needle}\\b`;
    let regEx = new RegExp(needle, 'gi');
    let res = haystack.match(regEx) || [];

    return res.length;
}

console.log(findOccurrences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']));
