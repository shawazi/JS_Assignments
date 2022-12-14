let input = +prompt("Enter a number: ")

if (input <= 20) {
    console.log(20 - input);
} else if (input > 20) {
    console.log((input - 20) * 2);
} else {
    console.log("Please enter a number.")
}
