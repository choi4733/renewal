// main swiper
const heroSwiper = new Swiper(".hero_swiper", {
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
});
