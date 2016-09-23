function lastMonth([day, month, year]) {
    let date = new Date(year, month - 1, 1);
    date = new Date(date - 1);

    return date.getDate();
}

console.log(lastMonth(['17','3','2002'])); // 28
console.log(lastMonth(['13','12','2004'])); // 30