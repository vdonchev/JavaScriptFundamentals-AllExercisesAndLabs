function treasureLocator(coordinates) {
    coordinates = coordinates.map(Number);

    let treasures = [];
    for (let i = 0; i < coordinates.length; i += 2) {
        let x = coordinates[i];
        let y = coordinates[i + 1];

        let treasureLocation = getTreasureLocation(x, y);
        treasures.push(treasureLocation);
    }

    console.log(treasures.join('\n'));

    function getTreasureLocation(x ,y) {
        switch (true) {
            case x >= 1 && x <= 3 && y >= 1 && y <= 3:
                return 'Tuvalu';
            break;
            case x >= 8 && x <= 9 && y >= 0 && y <= 1:
                return 'Tokelau';
            break;
            case x >= 5 && x <= 7 && y >= 3 && y <= 6:
                return 'Samoa';
            break;
            case x >= 0 && x <= 2 && y >= 6 && y <= 8:
                return 'Tonga';
            break;
            case x >= 4 && x <= 9 && y >= 7 && y <= 8:
                return 'Cook';
            break;
            default:
                return 'On the bottom of the ocean';
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);