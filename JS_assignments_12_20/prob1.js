function generateID(num) {
    char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    result = "";
    for (let i = 0; i < num.length; i++) {
        result += char_list.charAt(Math.floor(Math.random() * num.length));

    }
    return result;
}

generateID(30)