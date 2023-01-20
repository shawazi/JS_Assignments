const colors = ["yellow", "blue", "green", "red"]
counter = 0;
// let randomColor = Math.floor(Math.random()*16777215).toString(16);

// randomColor = '#' + ('000000' + randomColor).slice(-6);

const div = document.getElementById("Prob1");
const button = document.getElementById("colorChange");
let colorIndex = 0;

button.addEventListener("click", function() {
    
    // let randomColor = Math.floor(Math.random()*16777215).toString(16);

    // randomColor = '#' + ('000000' + randomColor).slice(-6);

    // div.style.backgroundColor = randomColor;
    
    if (counter < 3) {
        div.style.backgroundColor = colors[++counter];
    } else {
        counter = 0;
        div.style.backgroundColor = colors[counter];
    }


    // colors[colorIndex];
    // colorIndex = (colorIndex + 1) % colors.length;
    
    // the above commented out code is using the array with 4 options, but this current version of the code should be using all possible CSS colors as the options for the random background color.
});

