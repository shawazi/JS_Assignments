let input = +prompt("To calculate a factorial, enter the number: ");

let result = input;

for (let i = input - 1; i >= 1; i--) {
    result *= i;
}

console.log(result);