let f = input => input.filter((e, i) => i % input[input.length - 1] == 0 && i != input.length - 1).join('\n');

console.log(f(['5', '20', '31', '4', '20', '1']));