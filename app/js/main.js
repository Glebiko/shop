const headerBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.menu')

headerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
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

const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
});

const modeContainer = document.querySelector('.view-mode__container');
const modeBtnGrid = document.querySelector('.view-mode__btn-grid');
const modeBtnLine = document.querySelector('.view-mode__btn-line');

modeBtnGrid.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--grid')
  modeContainer.classList.remove('view-mode__container--line')
});

modeBtnLine.addEventListener('click', () => {
  modeContainer.classList.add('view-mode__container--line')
  modeContainer.classList.remove('view-mode__container--grid')
});

const rangeSlider = document.querySelector('.range__slider');
const rangeMin = document.querySelector('.range__min');
const rangeMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
      'min': 300,
      'max': 3000
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value)
  }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    rangeMin.value = values[0]
  } else {
    rangeMax.value = values[1]
  }
});

rangeMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([rangeMin.value, null])
});

rangeMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, rangeMax.value])  
});