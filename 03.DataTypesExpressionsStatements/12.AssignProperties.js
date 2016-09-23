function assignProperties([propA, valueA, propB, valueB, propC, valueC]) {
    let obj = {};
    obj[propA] = valueA;
    obj[propB] = valueB;
    obj[propC] = valueC;
    
    return obj;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
// {
//     name: 'Pesho',
//         age: '23',
//     gender: 'male'
// }