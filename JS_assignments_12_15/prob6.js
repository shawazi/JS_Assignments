let input = +prompt("To see an ascending pattern, enter a number: ");

for (let i = 1; i <= input; i++) {
    let result = '';
    
    for (let col = 1; col <= i; col++) {
        result += String(col) + " ";
    }

    console.log(result);
}

// I'm not sure why mine is working like this. It is slightly different from this solution here: https://www.tutorialstonight.com/number-pattern-programs-in-javascript 

// and it seems that my variables are reversed from the site author's. when i try to follow his solution, i get some errors. so I will just stick with this for now. 

// I also need to adjust it to account for cases where the user enters a string, or 0. 