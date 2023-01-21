const popUp = document.getElementById('popup');

function openModal() {
    popUp.classList.add('open-modal');
}

function closeModal() {
    popUp.classList.remove('open-modal');
}

export { openModal, closeModal }