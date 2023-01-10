const list = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

const duplicates = testarray => {
    let result = new Set();
    for (let i = 0; i < testarray.length; i++) {
        for (let j = 0; j < testarray.length; j++) {
            if (i !== j) {
                if (testarray[i] === testarray[j]) {
                    result.add(testarray[i]);
                }
            }
        }
    }
    return [result];
}

console.log(duplicates(list));