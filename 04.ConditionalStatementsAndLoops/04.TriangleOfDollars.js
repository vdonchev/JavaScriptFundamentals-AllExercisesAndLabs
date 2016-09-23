function printTriangleOfDollars([size]) {
    size = Number(size);
    for (let i = 1; i <= size; i++) {
        console.log('$'.repeat(i));
    }
}

printTriangleOfDollars(['3']);