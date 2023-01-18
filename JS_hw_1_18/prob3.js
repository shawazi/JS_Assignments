const pw_button = document.getElementById('pw-btn');

const result = document.getElementById('pw-result');

const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9];

pw_button.addEventListener('click', () => {
    let pass = '';
    for (let i = 0; i <= 8; i++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        pass += chars[randomNum];
    }
    result.innerText = pass;
})