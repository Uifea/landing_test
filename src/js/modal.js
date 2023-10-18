let modalWindow = document.querySelector('.modal');
let modalBtnOpen = document.querySelector('.modal-open');
let modalBtnClose = modalWindow.querySelector('.modal__close');
let modalSubmit = modalWindow.querySelector('.modal__form-btn');

let toggleModal = function () {
    modalWindow.classList.toggle('hide');
}

modalBtnOpen.addEventListener('click', () => {
    toggleModal();
})

modalBtnClose.addEventListener('click', () => {
    toggleModal();
})

modalSubmit.addEventListener('click', () => {
    toggleModal();
})

document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape' && !modalWindow.classList.contains('hide')) {
        toggleModal();
    }
})

document.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        toggleModal();
    }
})