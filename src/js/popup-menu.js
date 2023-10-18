let dropDown = document.querySelectorAll('.dropdown');

document.addEventListener("keydown", (e) => {
    dropDown.forEach(item => {
        if (e.code === 'Escape') {
            item.classList.remove('site-list__item--active');
        }
    })
})

dropDown.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        item.classList.toggle('site-list__item--active');
    })
})

document.addEventListener("click", (e) => {
    const target = e.target;
    dropDown.forEach(item => {
        let openedPopup = item.classList.contains('site-list__item--active');
        if (openedPopup && !target.closest(openedPopup)) {
            item.classList.remove('site-list__item--active');
        }
    })
})





