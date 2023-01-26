import { closeModal } from "./modal";

class Tasks {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const taskArray = [];

function getTaskInput() {
    const taskName = document.getElementById('name').value;
    const taskDesc = document.getElementById('description').value;
    const taskDate = document.getElementById('date').value;
    const taskPrio = document.getElementById('priority').value;

    return new Tasks(taskName, taskDesc, taskDate, taskPrio);
}

const tasksId = document.getElementById('tasksId');

function displayTask(tasks) {
    const taskDiv = document.createElement('div');
    taskDiv.id = 'card';
    
    const taskName = document.createElement('h3');
    const taskDescription = document.createElement('p');
    const taskDate = document.createElement('p');
    const taskPrio = document.createElement('p');

    taskName.innerText = tasks.name;

    if(taskName.innerText === '') {
        taskName.innerText = 'My Task';
    }

    taskDescription.innerText = tasks.description;
    taskDate.innerText = formatDate(tasks.dueDate);
    
    if(taskDate.innerText.includes('undefined')) {
        taskDate.innerText = 'No Due Date';
    }
    
    taskPrio.innerText = tasks.priority;

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskDate);
    taskDiv.appendChild(taskPrio);

    tasksId.appendChild(taskDiv)
    deleteButton(taskDiv)
}

function deleteButton(card) {
    const delBtn = document.createElement('button');
    delBtn.id = 'del-btn';

    delBtn.innerText = 'Delete 🗑';
    card.appendChild(delBtn);

    return card;
}

tasksId.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target
        const parent = button.parentNode
        if(button.id == 'del-btn') {
            tasksId.removeChild(parent);
        }
    }
})

function formatDate(date) {
    
    const day = date.split('-')[2];
    const month = date.split('-')[1];
    const year = date.split('-')[0];

    return `${day}/${month}/${year}`;
}

function submit() {
    
    const newTask = getTaskInput();
    taskArray.push(newTask);

    document.querySelector('form').reset();
    displayTask(newTask);
    closeModal();
}

export { submit }