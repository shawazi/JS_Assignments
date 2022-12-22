function switcher(string = "") {
    do {
        string = prompt("Please enter any number of characters: ");
    } while (string === "" || string === undefined)

    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            result += string[string.length - 1];
        } else if (i === string.length - 1) {
            result += string[0];
        } else {
            result += string[i];
        }
    }
    console.log(result)
    return result;
    
}



console.log(switcher())