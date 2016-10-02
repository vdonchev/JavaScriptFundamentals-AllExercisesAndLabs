function extractTheLinks(input) {
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let links = [], match;
    for (let line of input) {
        while (match = regex.exec(line)) {
            links.push(match[0]);
        }
    }

    return links.join('\n');
}

console.log(extractTheLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']));