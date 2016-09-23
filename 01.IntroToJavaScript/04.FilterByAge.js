function filterByAge([minAgeValue, nameA, ageA, nameB, ageB]) {
    let personA = {name: nameA, age: Number(ageA)};
    let personB = {name: nameB, age: Number(ageB)};

    let minAge = Number(minAgeValue);
    if (Number(ageA) >= minAge)
        console.log(personA);

    if (Number(ageB) >= minAge)
        console.log(personB);
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9']); //{ name: 'Ivan', age: 15 }