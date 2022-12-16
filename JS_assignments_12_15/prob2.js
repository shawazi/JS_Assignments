// GCD of two integers

let input1 = +prompt("Please enter the first number: ");
let input2 = +prompt("Please enter the second number: ");

// not sure how to do this mathematically. i found a formula, i will try that tomorrow. GCD formula, but it also uses the least common multiple as an argument in the formula, so i'll need to also calculate the least common multuple. 

let GCD;

for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        GCD = i;
    }
}

console.log(GCD);

// Nao's answer to this made it much less complicated than it seemed. Not sure why I had so much trouble with it last night, I think the formula was confusing me. 