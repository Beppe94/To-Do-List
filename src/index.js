import { openModal, closeModal } from "./modal";
import { submit } from "./tasks";
import { loadFromLocalStorage } from "./localstorage";
import { openForm, closeForm, submitPorject } from "./project";
import { submitProject } from "./project";

const submitBtn = document.getElementById('submit-task-btn');
const addProject = document.getElementById('submit-proj-btn');

document.addEventListener('click', function(e) {
    if(e.target.innerText == 'add_circle') {
        openModal();
    } else if(e.target.closest('.modal')){
        return
    } else {
        closeModal();
    }
})

document.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.innerText === 'add') {
        openForm();
    } else if(e.target.innerText === 'Cancel') {
        closeForm();
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    submit();
});

addProject.addEventListener('click', (e) => {
    e.preventDefault()
    submitProject();
});

loadFromLocalStorage()