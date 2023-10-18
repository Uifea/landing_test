let menuButton = document.querySelector('.header-page__humburger');
let navList = document.querySelector('.site-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})