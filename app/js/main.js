/* =======================
   MENU
======================= */
const headerBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

headerBtn?.addEventListener('click', () => {
  headerBtn?.classList.toggle('header__btn--open');
  menu?.classList.toggle('menu--active');
  body.classList.toggle('lock');
});


/* =======================
   VIEW MODE
======================= */
const modeContainer = document.querySelector('.view-mode__container');
const modeBtnGrid = document.querySelector('.view-mode__btn-grid');
const modeBtnLine = document.querySelector('.view-mode__btn-line');

modeBtnGrid?.addEventListener('click', () => {
  modeContainer?.classList.add('view-mode__container--grid');
  modeContainer?.classList.remove('view-mode__container--line');
});

modeBtnLine?.addEventListener('click', () => {
  modeContainer?.classList.add('view-mode__container--line');
  modeContainer?.classList.remove('view-mode__container--grid');
});


/* =======================
   MODAL
======================= */
const openModalBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'false');
  body.classList.add('scroll-lock');
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  body.classList.remove('scroll-lock');
}

openModalBtn?.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});


/* =======================
   POPUP
======================= */
const openPopupBtn = document.querySelector('.catalog-popup');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');
const closePopupBtn = document.querySelector('.close-popup');

function openPopup() {
  if (!popup) return;
  popup.setAttribute('aria-hidden', 'false');
  body.classList.add('scroll-lock');
}

function closePopup() {
  if (!popup) return;
  popup.setAttribute('aria-hidden', 'true');
  body.classList.remove('scroll-lock');
}

openPopupBtn?.addEventListener('click', openPopup);
closePopupBtn?.addEventListener('click', closePopup);
popupOverlay?.addEventListener('click', closePopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup?.getAttribute('aria-hidden') === 'false') {
    closePopup();
  }
});


/* =======================
   SWIPER: MOBILE PRODUCT
======================= */
const breakpoint = window.matchMedia('(min-width: 600px)');
let sliderMobile = null;

function initSwiper() {
  if (!document.querySelector('.slider-mobile')) return;

  sliderMobile = new Swiper('.slider-mobile', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.product__arrow-next',
      prevEl: '.product__arrow-prev',
    },
  });
}

function destroySwiper() {
  if (sliderMobile) {
    sliderMobile.destroy(true, true);
    sliderMobile = null;
  }
}

function handleBreakpointChange(e) {
  if (e.matches) {
    destroySwiper();
  } else if (!sliderMobile) {
    initSwiper();
  }
}

handleBreakpointChange(breakpoint);
breakpoint.addEventListener('change', handleBreakpointChange);


/* =======================
   SWIPER: REVIEWS
======================= */
if (document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 12,
    spaceBetween: 16,
    pagination: {
      el: '.reviews__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.reviews__arrow-next',
      prevEl: '.reviews__arrow-prev',
    },
    breakpoints: {
      0: { slidesPerView: 6 },
      768: { slidesPerView: 8 },
      1024: { slidesPerView: 12 },
    },
  });
}


/* =======================
   SWIPER: ACCESSORIES
======================= */
if (document.querySelector('.accessories__slider')) {
  new Swiper('.accessories__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.accessories__arrow-next',
      prevEl: '.accessories__arrow-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
    },
  });
}


/* =======================
   RANGE SLIDER
======================= */
const rangeSlider = document.querySelector('.range__slider');
const rangeMin = document.querySelector('.range__min');
const rangeMax = document.querySelector('.range__max');

if (rangeSlider && rangeMin && rangeMax) {
  noUiSlider.create(rangeSlider, {
    start: [300, 3000],
    step: 100,
    range: { min: 300, max: 3000 },
    format: {
      to: value => Math.round(value),
      from: value => Number(value),
    },
  });

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) rangeMin.value = values[0];
    else rangeMax.value = values[1];
  });

  rangeMin.addEventListener('change', () => {
    rangeSlider.noUiSlider.set([rangeMin.value, null]);
  });

  rangeMax.addEventListener('change', () => {
    rangeSlider.noUiSlider.set([null, rangeMax.value]);
  });
}
