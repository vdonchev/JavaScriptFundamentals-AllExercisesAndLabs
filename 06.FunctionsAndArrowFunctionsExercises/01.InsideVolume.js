function insideVolume(points) {
    points = points.map(Number);
    for (let i = 0; i < points.length; i+= 3) {
        let x = points[i];
        let y = points[i + 1];
        let z = points[i + 2];

        console.log(isInsideVolume(x, y, z) ? 'inside' : 'outside');
    }

    function isInsideVolume(x, y, z, boxX = 50, boxY = 80, boxZ = 50) {
        return x >= 0 && y >= 0 && z >= 0 && x <= boxX && y <= boxY && z <= boxZ;
    }
}

insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);