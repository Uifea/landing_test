let select = function() {
    let selectHeaders = document.querySelector('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let select = document.querySelector('.select');
    let selectBody = document.querySelector('.select__body');
    let currentText = select.querySelector('.select__current');

    let selectToggle = function () {
        select.classList.toggle('select__active');
    }

    let selectChoose = function(item) {
        let text = item.innerText;
        currentText.innerText = text;
        currentText.classList.add('select__current--new')
        select.classList.remove('select__active');
    }

    selectHeaders.addEventListener('click', () => {
        selectToggle();
    })

    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            selectChoose(item);
        })
    })

    document.addEventListener('click', (e) => {
        if(e.target !== selectHeaders && e.target !== selectBody && e.target !== currentText ) {
            select.classList.remove('select__active');
        }
    })

}
select();