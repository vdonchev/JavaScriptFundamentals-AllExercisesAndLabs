function countTownPopulation(towns) {
    let townsLog = new Map;
    for (let townData of towns) {
        let [town, population] = townData.split(' <-> ');
        if (!townsLog.has(town))
            townsLog.set(town, 0);
        townsLog.set(town, townsLog.get(town) + Number(population));
    }

    return [...townsLog.keys()].map(k => `${k} : ${townsLog.get(k)}`).join('\n');
}

console.log(countTownPopulation(["Sofia <-> 1200000","Montana <-> 20000","New York <-> 10000000","Washington <-> 2345000","Las Vegas <-> 1000000"]));