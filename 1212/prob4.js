let input = +prompt("Enter a number: ");

if (input >= 50 && input <= 100) {
    console.log(`${input} is in the inclusive range of 50 - 100.`);
} else if (input < 50 || input > 100) {
    console.log(`${input} is not in the inclusive range of 50 - 100.`);
} else {
    console.log("Please enter a number.");
}