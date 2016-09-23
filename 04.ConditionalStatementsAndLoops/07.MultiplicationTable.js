function generateMultiplicationTable([rowsCols]) {
    rowsCols = Number(rowsCols);
    let html = '<table border="1">\n';
    for (var row = 0; row <= rowsCols; row++) {
        html += '\t<tr>';
        for (var col = 0; col <= rowsCols; col++) {
            if (row == 0) {
                if (col == 0) {
                    html += '<th>x</th>';
                } else {
                    html += `<th>${col}</th>`;
                }
            } else {
                if (col == 0) {
                    html += `<th>${row}</th>`;
                } else {
                    html += `<td>${row * col}</td>`;
                }
            }
        }
        
        html += '</tr>\n';
    }

    html += '</table>';

    return html;
}

console.log(generateMultiplicationTable(['5']));