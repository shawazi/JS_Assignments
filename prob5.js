let num1 = +prompt("Enter the first value: ");
let num2 = +prompt("Enter the second value: ");

let abs1 = (num1 < 0) ? (num1 * -1) : num1;
let abs2 = (num2 < 0) ? (num2 * -1) : num2;

if (num1 < 0 && num2 < 0) {
    let dif1 = 100 + abs1;
    let dif2 = 100 + abs2;
    if (dif1 > dif2) {
        console.log(`${num2} is closest to 100.`);
    } else if (dif2 > dif1) {
        console.log(`${num1} is closest to 100.`);
    } else {
        console.log(`Both numbers are equidistant from 100.`);
    }
} else if (num1 > 0 && num2 > 0) {
    let dif1 = 
}