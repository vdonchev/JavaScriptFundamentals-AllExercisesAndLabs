function printScoreToHTML(input) {
    String.prototype.htmlEscape = function () {
        let tokensToReplace = {'<':'&lt;', '>':'&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;'};
        return this.replace(/[<>&'"]/g, m => tokensToReplace[m]);
    };

    let scores = JSON.parse(input);
    let htmlOutput = '<table>\n';
    htmlOutput += '\t<tr><th>name</th><th>score</th></tr>\n';
    for (let score of scores) {
        htmlOutput += `\t<tr><td>${score.name.htmlEscape()}</td><td>${score.score}</td></tr>\n`;
    }

    htmlOutput += '</table>';

    return htmlOutput;
}

console.log(printScoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']));
console.log(printScoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));