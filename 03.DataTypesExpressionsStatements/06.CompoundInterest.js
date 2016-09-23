function calculateCompoundInterest([principleSum, interestRate, period, totalTimeSpan]) {
    [principleSum, interestRate, period, totalTimeSpan] = [principleSum, interestRate, period, totalTimeSpan].map(Number);

    let n = 12 / period;
    let r = interestRate / 100 / n;

    return principleSum * Math.pow(1 + r, totalTimeSpan * n);
}

// https://qrc.depaul.edu/StudyGuide2009/Notes/Savings%20Accounts/Compound%20Interest.htm
console.log(calculateCompoundInterest([1500, 4.3, 3, 6])); // 1938.8368221341061
console.log(calculateCompoundInterest([100000, 5, 12, 25])); // 338635.4940899386
