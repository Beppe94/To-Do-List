import { setProjectToLocalStorage, removeProjFromLocalStorage } from "./localstorage";

class Projects{

    constructor(projectTitle) {
        this.projectTitle = projectTitle;
    }
}

const projectsDiv = document.getElementById('projects-div');
const popupForm = document.getElementById('popup-form');

function getProjectInput() {
    const projectTitle = document.getElementById('projects-name').value;

    return new Projects(projectTitle);
}

function displayProject(project) {
    const projectNameDiv = document.createElement('div');
    const projectNameP = document.createElement('h3');
    projectNameDiv.id = 'proj-name-div';
    const projectDelBtn = document.createElement('button');
    projectDelBtn.id = 'remove-project'
    projectDelBtn.innerText = '✗'

    projectNameP.innerText = project.projectTitle;

    projectNameDiv.appendChild(projectNameP);
    projectNameDiv.appendChild(projectDelBtn);

    projectsDiv.appendChild(projectNameDiv);
}

function submitProject() {

    const newProject = getProjectInput();
    console.log(newProject);
    setProjectToLocalStorage(newProject);
    displayProject(newProject);

}

projectsDiv.addEventListener('mouseover', (e) => {
    
    for (let i = 0; i < projectsDiv.children.length; i++){

        projectsDiv.children[i].onclick = function(){
            if(e.target.id === 'remove-project') {

                projectsDiv.removeChild(projectsDiv.children[i]);
                removeProjFromLocalStorage(i);
            }
        }    
    }
})

function openForm() {
    popupForm.classList.add('open-project');
}

function closeForm() {
    popupForm.classList.remove('open-project');
}

export { submitProject, displayProject, openForm, closeForm }