function dnaHelix([size]) {
    size = Number(size);
    let dnaText = 'ATCGTTAGGG';

    let letterIndex = 0;
    for (let row = 0; row < size; row++) {
        let letterA = dnaText[letterIndex++ % dnaText.length];
        let letterB = dnaText[letterIndex++ % dnaText.length];

        switch (row % 4) {
            case 0:
                console.log(`**${letterA}${letterB}**`);
                break;
            case 1:
                console.log(`*${letterA}--${letterB}*`);
                break;
            case 2:
                console.log(`${letterA}----${letterB}`);
                break;
            case 3:
                console.log(`*${letterA}--${letterB}*`);
                break;
        }
    }
}

dnaHelix([15]);