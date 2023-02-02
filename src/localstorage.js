import { displayTask } from "./tasks";

const todo = JSON.parse(localStorage.getItem('todo')) || [];

function setToLocalStorage(task) {
    
    todo.push(task)
    localStorage.setItem('todo', JSON.stringify(todo))
}

function removeFromLocalStorage(index) {
    todo.splice(index, 1)
    localStorage.setItem('todo', JSON.stringify(todo));
}

function loadFromLocalStorage() {
    
    if(todo != null) {
        todo.forEach(element => {
        displayTask(element);
        });
    }
    
    
}

export { setToLocalStorage, removeFromLocalStorage, loadFromLocalStorage , todo}