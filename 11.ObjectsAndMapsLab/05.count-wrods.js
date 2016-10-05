function countWords([text]) {
    let wordsCount = {};
    let words = text.match(/[a-zA-Z0-9_]+/g);
    for (let word of words) {
        if (!wordsCount.hasOwnProperty(word))
            wordsCount[word] = 0;
        wordsCount[word]++;
    }

    return JSON.stringify(wordsCount);
}

console.log(countWords(['JS devs use Node.js for server-side JS.-- JS for devs']));