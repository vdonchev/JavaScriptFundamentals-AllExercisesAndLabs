function tripLength(coordinates) {
    [x1, y1, x2, y2, x3, y3] = coordinates.map(Number);

    let p1p2 = calc2dDistance(x1, y1, x2, y2);
    let p1p3 = calc2dDistance(x1, y1, x3, y3);
    let p2p3 = calc2dDistance(x2, y2, x3, y3);

    let output = '';
    let length = 0;
    if (p1p2 <= p1p3 && p1p2 <= p2p3) {
        if (p1p3 <= p2p3) {
            console.log(`1->2->3: ${p1p2 + p1p3}`);
        } else {
            console.log(`1->2->3: ${p1p2 + p2p3}`);
        }
    } else if (p1p3 <= p1p2 && p1p3 <= p2p3) {
        if (p1p2 <= p2p3) {
            console.log(`2->1->3: ${p1p2 + p1p3}`);
        } else {
            console.log(`1->3->2: ${p1p3 + p2p3}`);
        }
    } else {
        if (p1p2 <= p1p3) {
            console.log(`1->2->3: ${p1p2 + p2p3}`);
        } else {
            console.log(`1->3->2: ${p1p3 + p2p3}`);
        }
    }

    function calc2dDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([0, 0, 2, 0, 4, 0]);