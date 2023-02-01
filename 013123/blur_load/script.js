const loadTextE1  = document.querySelector(".loading-text");

const bg = document.querySelector(".bg");

let load = 0;

// loadTextE1.style.opacity = '50%';

// bg.style.filter = 'blur(10px)';

let int = setInterval(blur, 30);

function blur() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadTextE1.style.opacity = `${100 - load}`;
    loadTextE1.innerText = `${load}%`;
    bg.style.filter = `blur(${100 - load}px)`;
}