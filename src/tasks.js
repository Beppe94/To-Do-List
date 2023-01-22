class Tasks {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function getTaskInput() {
    const taskName = document.getElementById('name').value;
    const taskDesc = document.getElementById('description').value;
    const taskDate = document.getElementById('dueDate').value;
    const taskPrio = document.getElementById('priority').value;
    const errorMsg = document.getElementById('error-msg');

    if(taskName != '') {
        return new Tasks(taskName, taskDesc, taskDate, taskPrio);
    } else {
        errorMsg.textContent = 'Task must be named';
    }
}