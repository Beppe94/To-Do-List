import { openModal, closeModal } from "./modal";
import { submit } from "./tasks";
import { loadFromLocalStorage } from "./localstorage";

document.addEventListener('click', function(e) {
    if(e.target.innerText == 'add_circle') {
        openModal();
    } else if(e.target.closest('.modal')){
        return
    } else {
        closeModal();
    }
})

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    submit();
});

loadFromLocalStorage()