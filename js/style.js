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
const menuNav = document.querySelector('.nav');
const mobileMenu = window.matchMedia('(max-width: 780px)');
function setMenuOpen(open, restoreFocus = false) {
 menuToggle.setAttribute('aria-expanded', String(open));
 menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
 document.body.classList.toggle('menu_open', open && mobileMenu.matches);
 if (!open && restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
menuNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
 if (event.key === 'Escape') setMenuOpen(false, true);
 if (event.key === 'Tab' && mobileMenu.matches && menuToggle.getAttribute('aria-expanded') === 'true') {
  const links = [...menuNav.querySelectorAll('a[href]')];
  const last = links[links.length - 1];
  if (event.shiftKey && document.activeElement === menuToggle) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menuToggle.focus(); }
 }
});
document.addEventListener('click', event => {
 if (mobileMenu.matches && !menuNav.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
});
mobileMenu.addEventListener('change', () => setMenuOpen(false));
// NEW and BEST have separate mobile expansion controls.
document.querySelectorAll('.product_more').forEach(button => {
 const list = document.getElementById(button.getAttribute('aria-controls'));
 const limit = list.id === 'new-products' ? 9 : 3;
 const sectionName = list.id === 'new-products' ? '신상품' : '베스트 상품';
 button.hidden = list.children.length <= limit;
 function updateProducts(expanded) {
  list.classList.toggle('is_expanded', expanded);
  button.setAttribute('aria-expanded', String(expanded));
  button.setAttribute('aria-label', `${sectionName} ${expanded ? '접기' : '더보기'}`);
  button.textContent = expanded ? '접기 －' : '더보기 ＋';
 }
 button.addEventListener('click', () => updateProducts(button.getAttribute('aria-expanded') !== 'true'));
 mobileMenu.addEventListener('change', () => updateProducts(false));
});