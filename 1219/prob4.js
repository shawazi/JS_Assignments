const guess = () => {
    let life = 5;
    const randomNumber = Math.round(Math.random() * 100);
    let guess;
    do {
        guess = Number(prompt("Please enter a number between 1 and 100: "))
        if (guess === randomNumber) {
            console.log("Congratulations, you have guessed the number!")
            break;
        } else {
            console.log(`You have ${life - 1}u77 lives remaining.`)
            if (guess > randomNumber) {
                console.log("The answer is lower than your guess.");
            } else {
                console.log("The answer is higher than your guess.");
            }
        }
        life -= 1;
    } while (life > 0);
    if (life === 0) {
        console.log("You died. The number is " + randomNumber);
    }
}   

guess();

