let select = function() {
    let selectHeaders = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    let selectToggle = function (item) {
        item.parentElement.classList.toggle('select__active');
    }

    let selectChoose = function(item) {
        let text = item.innerText;
        let select = item.closest('.select');
        let currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        currentText.classList.add('select__current--new')
        select.classList.remove('select__active');
    }

    selectHeaders.forEach(item => {
        item.addEventListener('click', () => {
            selectToggle(item);
        })
    })

    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            selectChoose(item);
        })
    })

    

}
select();