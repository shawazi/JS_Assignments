let input = prompt("Enter a number: ");

// if (typeof input == "number") {
//     console.log("That is a valid number.");
// } else {
//     console.log("That is not a valid number, please try again.")
// }

if (input === '' || isNaN(input) == true) {
    do {
        input = prompt("That isn't a valid number, please try again. Enter a number: ");
    } while (input === '' || isNaN(input) == true) 
    console.log("That is a valid number.");

} else {
    console.log("That is a valid number.");
} 





//JS converts empty string to 0. Need to account for user inputting empty string

// it just took me literally an hour to write these 10 lines of code. I had to keep moving things around because it wasn't outputting properly until i had some realizations about how NaN works, about how empty strings are converted to 0, and how to align everything so it runs acceptably. I'm definitely missing many pieces but it's working enough for now i guess. 

// hitting "cancel" on the prompt card is outputting "valid number" to console, because my else statement is too vague. will fix later.