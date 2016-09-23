function calculateBestDistance([speedA, speedB, time]) {
    [speedA, speedB, time] = [speedA, speedB, time].map(Number);
    let timeInHours = time / 60 / 60;
    let distanceA = (speedA * 1000) * timeInHours;
    let distanceB = (speedB * 1000) * timeInHours;
    
    return Math.abs(distanceA - distanceB);
}

console.log(calculateBestDistance([0, 60, 3600])); // 60000
console.log(calculateBestDistance([11, 10, 120])); // 33.33333333333337
console.log(calculateBestDistance([5, -5, 40])); // 111.11111111111111