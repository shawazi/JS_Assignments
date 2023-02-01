const tagsE1 = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', e => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        randomSelect()
    }
});

function createTags(input) {
    const tags = input
        .split(',')
        .filter(tag => tag.trim() !== "")
        .map(tag => tag.trim()
        );

    tagsE1.innerHTML = '';
    
    tags.forEach(tag => {
        const tagE1 = document.createElement('span');
        tagE1.innerText = tag;
        tagE1.classList.add('tag');
        tagsE1.appendChild(tagE1);
    });

};

function randomSelect() {
    const count = 20;
    const interval = setInterval(() => {
        const random = chooseRandom();
        highlight(random);
        setTimeout(() => {
            unHighlight(random);
        }, 100);
    }, 100);


    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const random = chooseRandom();
            highlight(random);
        }, 100);
    }, count * 100);
    
};

function chooseRandom() {
    const tags = document.querySelectorAll('.tag');
    console.log(tags);
    return tags[Math.floor(Math.random() * tags.length)];
};

function highlight(tag) {
    tag.classList.add('highlight');
};

function unHighlight(tag) {
    tag.classList.remove('highlight');
};