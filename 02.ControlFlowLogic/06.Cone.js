function findConeDetails([radius, height]) {
    [radius, height] = [radius, height].map(Number);
    let s = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + s);

    return `volume = ${volume}\narea = ${area}`;
}

console.log(findConeDetails(['3', '5']));
// volume = 47.1238898038469
// area = 83.22976079115259