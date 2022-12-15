let num1 = +prompt("Enter a number: ");
let operand = prompt("Enter an operand: ");
let num2 = +prompt("Enter another number: ");

switch (operand) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Enter '+', '-', '*', '/', and enter valid numbers.")

}