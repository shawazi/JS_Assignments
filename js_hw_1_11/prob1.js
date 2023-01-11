function count(string) {
    let string2 = string.replace(/\s/g, '');
    const vowels = ["a", "e", "i", "o", "u"];
    const cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    let strArr = string2.toLowerCase().split("");
    let vowelCount = 0;
    let consCount = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            vowelCount++;
        }
        else if (cons.includes(strArr[i])) {
            consCount++;
        }
    }
    return `There are ${consCount} consonants and ${vowelCount} vowels in "${string}".`

}

const test = "Write a JS code that counts how many vowels and constants a string has that a user entered";

console.log(count(test))