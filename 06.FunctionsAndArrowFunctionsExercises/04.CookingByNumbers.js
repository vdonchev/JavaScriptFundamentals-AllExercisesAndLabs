function cookingByNumbers(inputs) {
    let cook = (num, func) => func(num);
    let chop = n => n / 2;
    let dice = n => Math.sqrt(n);
    let spice = n => ++n;
    let bake = n => n * 3;
    let fillet = n => n * 0.80;

    let num = Number(inputs[0]);
    inputs = inputs.splice(1, inputs.length - 1);

    for (let operation of inputs) {
        switch (operation) {
            case 'chop':
                num = cook(num, chop);
                break;
            case 'dice':
                num = cook(num, dice);
                break;
            case 'spice':
                num = cook(num, spice);
                break;
            case 'bake':
                num = cook(num, bake);
                break;
            default:
                num = cook(num, fillet);
                break;
        }
        console.log(num);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);