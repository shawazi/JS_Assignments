const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };


const isEqual = (data0, data1) => {
    const data0Keys = Object.keys(data0);
    const data1Keys = Object.keys(data1);

    if (data0Keys.length !== data1Keys.length) {
        return false;
    }
    for (const i in data0) {
        if (data0.hasOwnProperty(i) && data0[i] !== data1[i]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual(data, data2));