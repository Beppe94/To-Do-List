import { openModal, closeModal } from "./modal";

const taskButton = document.getElementById('taskButton');
const modal = document.querySelector('.modal')


document.addEventListener('click', function(e) {
    if(e.target.innerText == 'add_circle') {
        openModal();
    } else if(e.target.closest('.modal')){
        return
    } else {
        closeModal();
    }
})

