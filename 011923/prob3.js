const button = document.getElementById("like");

let display = document.getElementById('like-display');

button.addEventListener('click', () => {
  
    
    console.log(display.innerText);
    if (display.innerText == "Liked!") {
        display.innerText = '';
    } else {
        display.innerText = 'Liked!';
    }
});