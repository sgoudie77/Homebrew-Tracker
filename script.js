// Sticky Navbar
window.addEventListener("scroll", function(){
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Menu Toggle for Responsive Design
function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

// Swiper JS Carousel
var swiper = new Swiper('.swiper-container', {
    speed: 4000,
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Gallery Lightbox
let imgBx = document.querySelectorAll('.imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}))