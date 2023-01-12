function valueToKey(obj) {
    const result = {};
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        result[values[i]] = keys[i];
        console.log(result);
    }
    return result;
}

let input =
{red: "#FF0000", green: "#00FF00", white: "#FFFFFF"} 
console.log(valueToKey(input))