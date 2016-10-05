function json2Table(input) {
    function htmlEscape(text) {
        text = '' + text;
        let tokensToReplace = {'<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;'};
        return text.replace(/[<>&'"]/g, m => tokensToReplace[m]);
    }

    let data = JSON.parse(input);
    let htmlOutput = '<table>\n';
    htmlOutput += '  <tr>';
    for (let heading of Object.keys(data[0])) {
        htmlOutput += `<th>${heading}</th>`
    }
    htmlOutput += '</tr>\n';

    for (let item of data) {
        htmlOutput += '  <tr>';
            for (let value of Object.keys(item)) {
                htmlOutput += `<td>${htmlEscape(item[value])}</td>`;
            }
        htmlOutput += '</tr>\n';
    }

    htmlOutput += '</table>';

    return htmlOutput;
}

console.log(json2Table(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));