let modal = document.getElementById('modal');
let openModal = document.getElementById('open-modal');
let closeModal = document.getElementById('close-modal');
let title = document.getElementById('title');

openModal.addEventListener('click', openHandler)
closeModal.addEventListener('click', closeHandler)

function openHandler(){
    modal.style.display = "block";
}

function closeHandler(){
    modal.style.display = "none";
}
