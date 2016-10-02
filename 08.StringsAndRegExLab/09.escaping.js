function escaping(input) {
    let escapeHtml = (html) => html.replace(/[<>&"]/g, m => ({'>': '&gt;', '<': '&lt;', '"': '&quot;', '&': '&amp;'}[m]));

    let ul = '<ul>\n';
    for (let line of input) {
        ul += `\t<li>${escapeHtml(line)}</li>\n`;
    }
    ul += '</ul>';
    
    return ul;
}

console.log(escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));
