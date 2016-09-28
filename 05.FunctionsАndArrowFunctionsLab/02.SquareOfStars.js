function squareOfStars([size]) {
    size = Number(size);

    for (let row = 0; row < size; row++) {
        printStars(size);
    }

    function printStars(length) {
        const BG = '*';
        console.log(BG + ` ${BG}`.repeat(length - 1))
    }
}

squareOfStars(['5']);