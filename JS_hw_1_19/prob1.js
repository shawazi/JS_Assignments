const inc1 = document.getElementById("inc-1");

const inc5 = document.getElementById("inc-5");

const dec1 = document.getElementById("dec-1");

const dec5 = document.getElementById("dec-5");

const display = document.getElementById("display");

let counter = 0;

inc1.addEventListener('click', () => {
    ++counter;
    display.innerText = counter;
});

inc5.addEventListener('click', () => {
    counter += 5;
    display.innerText = counter;
});

dec1.addEventListener('click', () => {
    --counter;
    display.innerText = counter;
});

dec5.addEventListener('click', () => {
    counter -= 5;
    display.innerText = counter;
});

// for (let elem of document.querySelectorAll('*')) {
//     elem.addEventListener("click", e => console.log("Capturing:", elem.tagName), true);

    
//   }