function composeTag([location, altText]) {
    return `<img src="${location}" alt="${altText}">`;
}

console.log(composeTag(['smiley.gif', 'Smiley Face'])); // <img src="smiley.gif" alt="Smiley Face">