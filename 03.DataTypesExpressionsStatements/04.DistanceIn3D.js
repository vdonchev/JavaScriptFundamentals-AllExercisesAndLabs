function calculateDistanceIn3d([aX, aY, aZ, bX, bY, bZ]) {
    [aX, aY, aZ, bX, bY, bZ] = [aX, aY, aZ, bX, bY, bZ].map(Number);
    let xRes = bX - aX;
    let yRes = bY - aY;
    let zRes = bZ - aZ;

    return Math.sqrt((xRes * xRes) + (yRes * yRes) + (zRes * zRes));
}

console.log(calculateDistanceIn3d([1, 1, 0, 5, 4, 0])); // 5
console.log(calculateDistanceIn3d([3.5, 0, 1, 0, 2, -1])); // 4.5