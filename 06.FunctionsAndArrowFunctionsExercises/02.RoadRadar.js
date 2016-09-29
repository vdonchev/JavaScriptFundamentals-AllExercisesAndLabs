function roadRadar([speed, location]) {
    speed = Number(speed);
    let currentLimit = getCurrentLimit(location);
    console.log(isSpeeding(speed, currentLimit));

    function getCurrentLimit(location) {
        switch (location) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            default:
                return 20; // residential
        }
    }

    function isSpeeding(speed, limit) {
        let speedDifference = speed - limit;
        switch (true) {
            case speedDifference > 0 && speedDifference <= 20:
                return 'speeding';
            case speedDifference > 20 && speedDifference <= 40:
                return 'excessive speeding';
            case speedDifference > 40:
                return 'reckless driving';
        }

        return false;
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);