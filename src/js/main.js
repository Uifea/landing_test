let menuButton = document.querySelector('.header-page__humburger');
let navList = document.querySelector('.site-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})

let date = new Date();
let dateDay = document.querySelector('.hero__date--day');
let dateMonth = document.querySelector('.hero__date--month');

let optionsDateDay = {
    day: 'numeric'
}

let optionsDateMonth = {
    month: 'long'
}

dateDay.textContent = date.toLocaleString('ru-RU', optionsDateDay);
dateMonth.textContent = date.toLocaleString('ru-RU', optionsDateMonth);


// heroDate.textContent = ;