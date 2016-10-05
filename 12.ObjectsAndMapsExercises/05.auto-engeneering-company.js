function generateCarLog(data) {
    let catalogue = new Map;
    for (let line of data) {
        let tokens = line.split(/\s\|\s/);
        let [brand, model, quantity] = tokens;
        if (!catalogue.has(brand)) {
            catalogue.set(brand, new Map);
        }

        if (!catalogue.get(brand).has(model)) {
            catalogue.get(brand).set(model, 0);
        }

        catalogue.get(brand).set(model, catalogue.get(brand).get(model) + Number(quantity));
    }

    for (let [brand, models] of catalogue) {
        console.log(brand);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

generateCarLog(["Audi | Q7 | 1000","Audi | Q6 | 100","BMW | X5 | 1000","BMW | X6 | 100","Citroen | C4 | 123","Volga | GAZ-24 | 1000000","Lada | Niva | 1000000","Lada | Jigula | 1000000","Citroen | C4 | 22","Citroen | C5 | 10"]);