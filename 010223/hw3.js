function TitleCase(str) {
    let array = str.split(" ");
    let result = "";
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
        result += array[i];
        
    }
    result = result.join(" ");
    console.log(result);
    return result;
}

let test = "hello, tHiS Is a TeSt.";
console.log(TitleCase(test));

//result is a string, so i can't use join on it. also, the loop is not properly uppercasing the first letter of each word...