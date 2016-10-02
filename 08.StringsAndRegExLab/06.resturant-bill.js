function restaurantBill(input) {
    let meals = [];
    let sum = 0;

    for (let i = 0; i < input.length; i += 2) {
        meals.push(input[i]);
        sum += Number(input[i + 1]);
    }

    return `You purchased ${meals.join(', ')} for a total sum of ${sum}`;
}

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));
