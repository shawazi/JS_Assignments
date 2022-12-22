const Counter = (string, char) => {
    string = string;
    let result = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === char) {
            result++
        }
    }
    return result
}


console.log(Counter("ShawAz", "A"))

// I can add .toLowerCase at a few different points to adjust the functionality depending on whether I want to use uppercase characters as distinct from their lowercase counterparts