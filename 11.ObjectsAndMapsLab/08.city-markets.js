function cityMarkets(sales) {
    let salesReports = new Map;
    for (let report of sales) {
        let [town, product, amount, price] = report.split(/\s+->\s+|\s+:\s+/g);
        let income = Number(amount) * Number(price);

        if (!salesReports.has(town))
            salesReports.set(town, new Map);
        if (!salesReports.get(town).has(product))
            salesReports.get(town).set(product, 0);
        salesReports.get(town).set(product, salesReports.get(town).get(product) + income);
    }

    let output = '';
    for (let [town, products] of salesReports) {
        output += `Town - ${town}\n`;
        for (let [product, income] of products) {
            output += `$$$${product} : ${income}\n`;
        }
    }

    return output.trim();
}

console.log(cityMarkets(["Sofia -> Laptops HP -> 200 : 2000","Sofia -> Raspberry -> 200000 : 1500","Sofia -> Audi Q7 -> 200 : 100000","Montana -> Portokals -> 200000 : 1","Montana -> Qgodas -> 20000 : 0.2","Montana -> Chereshas -> 1000 : 0.3"]));