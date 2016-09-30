function printFirstLastNums(arr) {
    arr = arr.map(Number);
    let count = arr[0];
    arr.shift();

    console.log(arr.slice(0, count));
    console.log(arr.slice(Math.max(0, arr.length - count), count + 1));
}

printFirstLastNums(['3', '6', '7', '8', '9']);