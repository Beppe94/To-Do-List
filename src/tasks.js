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

const errorMsg = document.getElementById('error-msg');

function getTaskInput() {
    const taskName = document.getElementById('name').value;
    const taskDesc = document.getElementById('description').value;
    const taskDate = document.getElementById('date').value;
    const taskPrio = document.getElementById('priority').value;

    return new Tasks(taskName, taskDesc, taskDate, taskPrio);
}


function displayTask(tasks) {
    const tasksId = document.getElementById('tasksId');
    const taskDiv = document.createElement('div');

    const taskName = document.createElement('h3');
    const taskDescription = document.createElement('p');
    const taskDate = document.createElement('p');
    const taskPrio = document.createElement('p');

    if(taskName.innerText == ''){
        taskName.innerText = 'My Task'
    } else {
        taskName.innerText = tasks.name;
    }

    taskDescription.innerText = tasks.description;
    taskDate.innerText = tasks.dueDate;
    taskPrio.innerText = tasks.priority;
   
        
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskDate);
    taskDiv.appendChild(taskPrio);

    tasksId.appendChild(taskDiv)
}

function submit() {
    
    const newTask = getTaskInput();
    taskArray.push(newTask);

    document.querySelector('form').reset();
    displayTask(newTask);
    closeModal();
}

export { submit }