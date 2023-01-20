// too complicated for me to think about right now, without google or methods

// display the factors of a number entered by the user. 

let num = +prompt("Enter a number to find the factors: ");
let factors = []

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i + ' is a factor of ' + num);
        factors.push(i);
    }
}