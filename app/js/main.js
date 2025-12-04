const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
});
