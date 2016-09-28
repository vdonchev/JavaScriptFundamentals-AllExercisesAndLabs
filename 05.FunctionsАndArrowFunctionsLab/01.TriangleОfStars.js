function triangleOfStars([size]) {
    const BG = '*';
    size = Number(size);
    let num = 1;

    for (let row = 0; row < size * 2; row++) {
        if (row <= size) {
            console.log(BG.repeat(row));
        } else {
            console.log(BG.repeat(size - num++));
        }
    }
}

triangleOfStars(['5']);