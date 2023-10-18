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