const projectDiv = document.getElementById('projects-div');
const projectTitle = document.getElementById('projects-name');
const popupForm = document.getElementById('popup-form');

function getProject() {
    const projectBtn = document.createElement('button');

    if(projectTitle.value === '') {
        projectBtn.innerText = 'My Project';
    } else {
        projectBtn.innerText = projectTitle.value;
    }
    
    projectDiv.appendChild(projectBtn);

    closeForm();
    document.querySelector('form').reset();
}

function openForm() {
    popupForm.classList.add('open-project');
}

function closeForm() {
    popupForm.classList.remove('open-project');
}

export { getProject, openForm, closeForm }