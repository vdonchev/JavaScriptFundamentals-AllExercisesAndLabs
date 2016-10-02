function extractDates(input) {
    let pat = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g;
    let validDates = [], res;
    for (let line of input) {
        while (res = pat.exec(line)) {
            validDates.push(`${res[0]} (Day: ${res[1]}, Month: ${res[2]}, Year: ${res[3]})`);
        }
    }

    return validDates.join('\n');
}

console.log(extractDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way', '-- Ivo, 28-Sep-2016.']));