function extractNumbers(input) {
    let nums = [];
    for (let line of input) {
        let res = line.match(/\d+/g);
        if(res) {
            nums = nums.concat(res);
        }
    }

    return nums.join(' ');
}

console.log(extractNumbers(['123a456', '789b987', '654c321', '0']));
