import { openModal, closeModal } from "./modal";
import { submit, displayTask} from "./tasks";

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

submitBtn.addEventListener('click', submit);
