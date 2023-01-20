const Button = document.getElementById("palButton");

const str = document.getElementById("palCheck");

const input = document.getElementById("palInput")

function checkPal(str) {
    const reverseString = str.split('').reverse().join('');

    if(string == reverseString) {
        return 'It is a palindrome';
    }
    else {
        return 'It is not a palindrome';
    }
}



Button.addEventListener("input", e => () {
  
    let str = input.value;
    input.value = '';
    if (checkPal(str)) {
        XPathResult.innerText = `${str} is a palindrome`;
    } else {
        result
    }
});