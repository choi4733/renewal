// main swiper
const heroSwiper = typeof Swiper !== "undefined" ? new Swiper(".hero_swiper", {
  loop: true,

  speed: 700,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".hero_swiper .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".hero_inner .swiper-button-next",
    prevEl: ".hero_inner .swiper-button-prev",
  },
}) : null;

const menuToggle = document.querySelector('.menu_toggle');
menuToggle.addEventListener('click', () => {
 const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
 menuToggle.setAttribute('aria-expanded', String(!expanded));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => menuToggle.setAttribute('aria-expanded', 'false')));
document.addEventListener('keydown', event => { if (event.key === 'Escape') menuToggle.setAttribute('aria-expanded', 'false'); });

