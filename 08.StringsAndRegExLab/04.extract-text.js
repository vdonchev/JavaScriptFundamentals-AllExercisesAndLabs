function extractText([text]) {
    let words = [];
    let leftIndex = -1;
    while (true) {
        leftIndex = text.indexOf('(', leftIndex);
        if (leftIndex < 0) {
            break;
        }

        let rightIndex = text.indexOf(')', leftIndex + 1);
        if (rightIndex < 0) {
            break;
        }

        words.push(text.substring(leftIndex + 1, rightIndex));
        leftIndex = rightIndex + 1;
    }

    return words.join(', ');
}

console.log(extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']));