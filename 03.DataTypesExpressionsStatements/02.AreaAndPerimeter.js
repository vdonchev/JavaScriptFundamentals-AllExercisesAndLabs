function calculateAreaAndPerimeter([sideA, sideB]) {
    [sideA, sideB] = [sideA, sideB].map(Number);
    
    return `${sideA * sideB}\n${sideA + sideA + sideB + sideB}`;
}

console.log(calculateAreaAndPerimeter(['2.5', '3.14']));
// 7.85
// 11.28