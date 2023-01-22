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
    const errorMsg = document.getElementById('error-msg');

    if(taskName != '') {
        return new Tasks(taskName, taskDesc, taskDate, taskPrio);
    } else {
        errorMsg.textContent = 'Task must be named';
    }
}

const date = new Date();
console.log(date);
const tasksId = document.getElementById('tasksId');

function displayTask(tasks) {
    const taskDiv = document.createElement('div');

    const taskName = document.createElement('h3');
    const taskDescription = document.createElement('p');
    const taskDate = document.createElement('p');
    const taskPrio = document.createElement('p');

    taskName.innerText = tasks.name;
    taskDescription.innerText = tasks.description;
    taskDate.innerText = tasks.dueDate;
    taskPrio.innerText = tasks.priority;

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskDate);
    taskDiv.appendChild(taskPrio);

    tasksId.appendChild(taskDiv)
}

function submit(e) {
    e.preventDefault();
    
    const newTask = getTaskInput();
    console.log(newTask);
    taskArray.push(newTask);

    document.querySelector('form').reset()
    displayTask(newTask)
    closeModal()
}

export { submit }