function calculateCircleArea([radius]) {
    radius = Number(radius);
    let area = Math.PI * radius * radius;
    return `${area.toString()}\n${Math.round(area * 100) / 100}`;
}

console.log(calculateCircleArea([5])); 
// 78.53981633974483 
// 78.54
