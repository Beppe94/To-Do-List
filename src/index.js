import { openModal, closeModal } from "./modal";

const taskButton = document.getElementById('taskButton');
const modal = document.getElementsByClassName('modal')

taskButton.addEventListener('click', openModal);

