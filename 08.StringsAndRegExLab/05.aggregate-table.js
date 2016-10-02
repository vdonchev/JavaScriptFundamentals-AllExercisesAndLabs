function aggregateTable(input) {
    let towns = [];
    let sum = 0;

    for (let town of input) {
        let townTokens = town.split(/\s*\|\s*/).filter(t => t != '');
        towns.push(townTokens[0]);
        sum += Number(townTokens[1]);
    }

    return towns.join(', ') + '\n' + sum;
}

console.log(aggregateTable(
    ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
));