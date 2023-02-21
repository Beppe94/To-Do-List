import { displayTask } from "./tasks";
import { displayProject } from "./project"

const todo = JSON.parse(localStorage.getItem('todo')) || [];
const projects = JSON.parse(localStorage.getItem('project')) || [];

function setToLocalStorage(task) {
    
    todo.push(task)
    localStorage.setItem('todo', JSON.stringify(todo));
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

    if(projects != null) {
        projects.forEach(project => {
            console.log(project);
            displayProject(project);
        });
    }
}

function setProjectToLocalStorage(project) {
    
    projects.push(project);
    localStorage.setItem('project', JSON.stringify(projects));
}

function removeProjFromLocalStorage(index) {

    projects.splice(index, 1)
    localStorage.setItem('project', JSON.stringify(projects));
}

export { setToLocalStorage, removeFromLocalStorage, loadFromLocalStorage, setProjectToLocalStorage, removeProjFromLocalStorage }