function double(obj) {
    // let copy = {...obj};
    // const keys = Object.keys(copy)
    // for (let key of keys) {
    //     copy[key] = copy[key] * 2;
    // }
    // return copy;

    const entries = Object.entries(obj);
    console.log(entries);
    const newObj = {};
    for (let [key, value] of entries) {
        newObj[key] = value * 2;
    }
    return newObj
}

object1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40}

console.log(double(object1));