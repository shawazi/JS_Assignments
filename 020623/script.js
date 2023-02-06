class Task {
    constructor (item, desc) {
        this.id = Math.floor(Math.random() * 5000);
        this.item = item;
        this.desc = desc;
        this.completed = false;
    }
};

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(item => item.id !== Number(id))
    }

    toggleTask(task) {
        const index = this.tasks.findIndex(item => item.id == id);
        this.tasks[index].completed = !this.tasks[index].completed;
    }
}

const form = document.getElementById('form');
const inputItem = document.getElementById('item');
const inputDesc = document.getElementById('desc');
const ulList = document.getElementById('list');

const allTodos = new TaskList();
// console.log(allTodos)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = inputItem.value;
    // console.log(inputItem)
    const desc = inputDesc.value;
    const task = new Task(item, desc);
    allTodos.addTask(task);
    
    const liItem = document.createElement("li");

    liItem.dataset.id = task.id;
    
    liItem.innerHTML = `<span>${task.item}</span> | <span>${task.desc}</span> | <input type="checkbox"> |             <button>X</button>
    `;
    // console.log(liItem)
    ulList.appendChild(liItem);
});

ulList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.textContent === "X") {
        // console.log("Delete item");
        const id = e.target.parentElement.dataset.id;

        e.target.parentElement.remove();
        allTodos.removeTask(id);
    }
});

