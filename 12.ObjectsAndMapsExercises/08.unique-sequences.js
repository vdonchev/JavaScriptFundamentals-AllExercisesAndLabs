function uniqueSequences(data) {
    let arrays = new Map;
    for (let line of data) {
        let arr = JSON.parse(line).map(Number);
        let sortedArr = arr.sort((a, b) => b - a);
        let toStore = `[${sortedArr.join(', ')}]`;
        if (!arrays.has(toStore)) {
            arrays.set(toStore, sortedArr.length);
        }
    }

    function cSort(arrA, arrB, map) {
        return map.get(arrA) - map.get(arrB);
    }

    let sortedKeys = [...arrays.keys()].sort((a, b) => cSort(a, b, arrays));
    for (let arr of sortedKeys) {
        console.log(arr);
    }
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]","[10, 1, -17, 0, 2, 13]","[4, -3, 3, -2, 2, -1, 1, 0]"]);
uniqueSequences(["[7.14, 7.180, 7.339, 80.099]","[7.339, 80.0990, 7.140000, 7.18]","[7.339, 7.180, 7.14, 80.099]"]);