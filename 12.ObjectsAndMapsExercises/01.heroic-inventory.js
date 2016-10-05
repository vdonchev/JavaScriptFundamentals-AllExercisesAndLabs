function catalogueHeroes(input) {
    let allHeroes = [];

    for (let line of input) {
        let heroTokens = line.split(/\s+\/\s+/g).filter(t => t != '');
        [hero, levelStat, itemsArr] = [heroTokens[0], Number(heroTokens[1]), heroTokens[2] != undefined ? heroTokens[2].split(', ') : []];
        allHeroes.push({name: hero, level: levelStat, items: itemsArr});
    }

    return JSON.stringify(allHeroes);
}

console.log(catalogueHeroes(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]));