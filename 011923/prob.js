const counter = document.getElementById("display");

const buttons = document.getElementById("js-buttons");

let count = 0;

buttons.addEventListener("click", event => {
    // console.log(event.target.innerText);
    // count = count + event.target.innerText;
    // counter.innerText = eval(count);
// eval deprecated so conditionals seem to be preferred
    if (event.target.id === 'inc-1') {
        count += 1;
    } else if (event.target.id === 'inc-5') {
        count += 5;
    } else if (event.target.id === 'dec-1') {
        count -= 1;
    } else if (event.target.id === 'dec-5') {
        count -= 5;
    }
    counter.innerText = count;
    });

const insert = document.getElementById('prob2');

window.addEventListener("keydown", event => {
    console.log(event);
    console.log(event.keycode);
    console.log(event.code);

    insert.innerHTML = `<section class="key"> ${event.key} <small>event.key</small>
    <div class="keyCode"> ${event.keyCode} <small>event.keyCode</small>
    <div class="code"> ${event.code} <small>event.code</small> </section>`
});


const likeBtn = document.getElementById('heart');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
});

const box = document.querySelector('.box');

function checkBox() {
    const Bottom = window.innerHeight;
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < Bottom) {
        box.classList.add('show');
    } else {
        box.classList.remove('show');
    }
}

window.addEventListener('scroll', checkBox);
checkBox();