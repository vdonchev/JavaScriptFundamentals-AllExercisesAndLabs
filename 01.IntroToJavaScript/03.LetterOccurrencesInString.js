function countLetter([word, letter]) {
    let count = 0;
    for (let ch of word) {
        if (ch == letter) {
            count++;
        }
    }

    console.log(count);
}

countLetter(['hello', 'l']); // 2