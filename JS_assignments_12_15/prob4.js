let num = +prompt("Enter a base number: ");
let power = +prompt("Enter an exponent value: ");

let result = 1


// console.log(num**power);

for (let i = 0; i < power; i++) {
    result *= num;
}

console.log(result);