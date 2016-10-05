function sumByTown(townData) {
    let totalIncome = {};
    for (let i = 0; i < townData.length; i += 2) {
        let [town, income] = townData.slice(i, i + 2);
        if (!totalIncome.hasOwnProperty(town)) {
            totalIncome[town] = 0;
        }

        totalIncome[town] += Number(income);
    }

    return JSON.stringify(totalIncome);
}

console.log(sumByTown(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]));