function sortUsernames(names) {
    let userNames = new Set;
    for (let name of names) {
        userNames.add(name);
    }

    function nameComparator(nameA, nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }

        return nameA.localeCompare(nameB);
    }
    console.log([...userNames].sort(nameComparator).join('\n'));
}

sortUsernames(["Denise","Ignatius","Iris","Isacc","Indie","Dean","Donatello","Enfuego","Benjamin","Biser","Bounty","Renard","Rot"]);