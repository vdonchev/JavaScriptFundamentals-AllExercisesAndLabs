function gradsToDegrees([gon]) {
    gon = Number(gon) % 400;
    gon = gon < 0 ? 400 + gon : gon;
    gon = 400 / gon;

    return 360 / gon;
}

console.log(gradsToDegrees([100])); // 90
console.log(gradsToDegrees([400])); // 0
console.log(gradsToDegrees([850])); // 45
console.log(gradsToDegrees([-50])); // 315