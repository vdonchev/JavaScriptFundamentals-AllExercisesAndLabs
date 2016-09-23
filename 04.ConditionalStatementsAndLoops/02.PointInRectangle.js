function isPointInsideRectangle(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);

    return x >= xMin && x <= xMax && y >= yMin && y <= yMax ? 'inside' : 'outside';
}