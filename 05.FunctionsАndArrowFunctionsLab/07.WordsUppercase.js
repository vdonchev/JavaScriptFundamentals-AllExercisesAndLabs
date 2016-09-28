function wordsToUppercase([text]) {
    return text
        .toUpperCase()
        .split(/[^\w]+/)
        .filter(w => w != '')
        .join(', ');
}

console.log(wordsToUppercase(['Hi, how are you?']));