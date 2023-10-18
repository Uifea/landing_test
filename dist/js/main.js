let menuButton = document.querySelector('.header-page__humburger');
let navList = document.querySelector('.site-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})
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






let radioButtons = document.querySelectorAll('.rating__item');
let ratingNumber = document.querySelector('.rating__number');


radioButtons.forEach(item => {
    item.addEventListener('click', () => {
        ratingNumber.textContent = item.value
    } )
})
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
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    breakpoints: {
      565: {
        slidesPerView: 3,
        pagination: false,
      }
    }
  
  });