function printEmployeeData(persons) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]+[0-9]*) - ([a-zA-Z0-9- ]+)$/;
    for (let person of persons) {
        let match = regex.exec(person);
        if (match) {
            console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
            `Salary: ${match[2]} `);
        }
    }
}

printEmployeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);