const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 12,
  spaceBetween: 16,
  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
});
