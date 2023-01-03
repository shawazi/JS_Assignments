function abbr(str) {
    let myArray = str.split(" ");
    let first = myArray[0];
    let last = myArray[myArray.length - 1];
    last = last.slice(0, 1);
    last += "."
    let result = first.concat(" ", last);
    return result;
}

let string = "Shawaz Ali Imam";
console.log(abbr(string));