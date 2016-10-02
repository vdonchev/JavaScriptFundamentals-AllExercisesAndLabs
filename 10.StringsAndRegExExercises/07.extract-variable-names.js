function extractVariableNames([text]) {
    let regEx= /\b_([A-Za-z0-9]+)\b/g;
    let vars = [], match;
    while (match = regEx.exec(text)) {
        vars.push(match[1]);
    }
    
    return vars.join(',');
}

console.log(extractVariableNames(['Calculate the _area of the _perfectRectangle object.']));