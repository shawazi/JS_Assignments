const extract = (str, char) => {
    let newWord = "";
    for (let i = 0; i < char; i++) {
        newWord += str[i];
    }
    return newWord
}

console.log(extract("supercharged", 5))