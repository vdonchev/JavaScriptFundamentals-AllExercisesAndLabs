function cappyJuice(input) {
    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let line of input) {
        let tokens = line.split(/\s*=>\s*/);
        let [type, quantity] = [tokens[0], Number(tokens[1])];
        if (!totalJuice.has(type)) {
            totalJuice.set(type, 0);
        }

        let currentQuantity = totalJuice.get(type);
        currentQuantity += quantity;

        if (currentQuantity >= 1000) {
            let juiceLeft = currentQuantity % 1000;
            let bottlesToStore = (currentQuantity - juiceLeft) / 1000;
            if (!totalBottles.has(type)) {
                totalBottles.set(type, 0);
            }

            totalBottles.set(type, totalBottles.get(type) + bottlesToStore);
            quantity = juiceLeft;
        }

        totalJuice.set(type, totalJuice.get(type) + quantity);
    }

    for (let [juice, bottles] of totalBottles) {
        console.log(`${juice} => ${bottles}`);
    }
}

cappyJuice(["Kiwi => 234", "Pear => 2345", "Watermelon => 3456", "Kiwi => 4567", "Pear => 5678", "Watermelon => 6789"]);
// cappyJuice(["Orange => 2000","Peach => 1432","Banana => 450","Peach => 600","Strawberry => 549"]);