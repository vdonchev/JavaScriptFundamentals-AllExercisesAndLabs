function calculateBoxes([bottles, boxCapacity]) {
    [bottles, boxCapacity] = [bottles, boxCapacity].map(Number);
    return Math.ceil(bottles / boxCapacity);
}

console.log(calculateBoxes([20 ,5])); // 4