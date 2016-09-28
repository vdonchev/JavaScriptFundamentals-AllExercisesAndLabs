function aggregateElements(numbers) {
    numbers = numbers.map(Number);

    let sum = (a, b) => a + b;
    let sumHalf = (a, b) => a + (1 / b);
    let concatenate = (a, b) => '' + a + b;

    let aggregate = function (items, init, func) {
        for (let item of items) {
            init = func(init, item);
        }

        return init;
    };

    console.log(aggregate(numbers, 0, sum));
    console.log(aggregate(numbers, 0, sumHalf));
    console.log(aggregate(numbers, '', concatenate));
}

aggregateElements(['1', '2', '3']);