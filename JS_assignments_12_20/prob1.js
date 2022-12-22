function generateID(num) {
    const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    result = "";
    for (let i = 0; i < num; i++) {
        result += char_list.charAt(Math.floor(Math.random() * char_list.length));

    }
    return result;
}

console.log(generateID(30))