let num1 = +prompt("Enter the first number: ");

let num2 = +prompt("Enter the second number: ");

let num3 = +prompt("Enter the third number: ");

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the greatest value.`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the greatest value.`);
} else if (num3 > num1 && num3 > num1) {
    console.log(`${num3} is the greatest value.`);
} else if (num1 === num2 && num1 > num3) {
    console.log(`${num1} and ${num2} are tied for the greatest value.`)
} else if (num2 === num3 && num3 > num1) {
    console.log(`${num2} and ${num3} are tied for the greatest value.`)
} else if (num1 === num3 && num1 > num2) {
    console.log(`${num1} and ${num3} are tied for the greatest value.`)
} else {
    console.log("All three numbers are equal to each other.")
}
