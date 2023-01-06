function evenDash(str) => {
    let number = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] % 2 === 0 && str[i - 1] % 2 === 0) {
            number += str[i - 1] 
        }
    }
}