let radioButtons = document.querySelectorAll('.rating__item');
let ratingNumber = document.querySelector('.rating__number');


radioButtons.forEach(item => {
    item.addEventListener('click', () => {
        ratingNumber.textContent = item.value
    } )
})